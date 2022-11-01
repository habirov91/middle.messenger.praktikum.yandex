import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import { EventBus } from 'shared/classes';
import { Nullable } from '../../types';

export type Events = typeof Block.EVENTS[keyof typeof Block.EVENTS];

export type BlocksObject = Record<string, Block>;

export type Children = Record<string, Block | Block[] | BlocksObject[]>;

export type TProps = Record<string, any>;

export class Block <P = any> {

    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    children: Children;

    eventBus: EventBus<Events>;

    protected readonly props: P;

    private _template: string;

    private _id: Nullable<string>;

    private _element: Nullable<HTMLElement> = null;

    constructor(tmpl: string, propsAndChildren: Record<string, Block | any>) {
        const { children, props } = this._getChildren(propsAndChildren);

        this.children = children;

        this._template = tmpl;

        this._id = makeUUID();

        this.props = this._makePropsProxy(props);

        this.eventBus = new EventBus();

        this._registerEvents(this.eventBus);
        this.eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus<Events>) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    init() {
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();
        Object.values(this.children).forEach((child) => {
            if (Array.isArray(child)) {
                child.forEach((subChild) => {
                    if (this._isBlocksObject(subChild)) {
                        Object.values(subChild).forEach((el) => {
                            el.dispatchComponentDidMount();
                        });
                    } else {
                        (subChild as Block).dispatchComponentDidMount();
                    }
                });
            } else {
                child.dispatchComponentDidMount();
            }
        });
    }

    componentDidMount(oldProps?: P) {
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, this.props);
    }

    dispatchComponentDidMount() {
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: P, newProps: P) {
        const response = this.componentDidUpdate(oldProps, newProps);

        if (response) {
            this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    componentDidUpdate(oldProps: P, newProps: P) {
        if (!oldProps) {
            return true;
        }
// @ts-ignore
        const updatedProp = Object.keys(newProps).find(
            (prop) =>
                (oldProps as Record<string, any>)[prop] === undefined ||
                (oldProps as Record<string, any>)[prop] !==
                (newProps as Record<string, any>)[prop],
        );

        return !!updatedProp;
    }

    setProps = (nextProps: Partial<P>) => {
        if (!nextProps) {
            return;
        }
// @ts-ignore
        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    _addEvents() {
        const { events = {} } = this.props as unknown as Record<string, any>;

        Object.keys(events).forEach((eventName) => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    _removeEvents() {
        const { events = {} } = this.props as unknown as Record<string, any>;

        if (!this._element) {
            return;
        }

        Object.keys(events).forEach((eventName) => {
            this._element!.removeEventListener(eventName, events[eventName]);
        });
    }

    _render() {
        const element = this.render();

        this._removeEvents();

        if (!this._element) {
            this._element = element;
        } else {
            this._element.replaceWith(element);

            this._element = element;
        }

        this._addEvents();
    }

    render(): HTMLElement {
        return new HTMLElement();
    }

    compile(props: P): HTMLElement {
        const propsAndStubs = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                (propsAndStubs as Record<string, any>)[key] = child.map((subChild) => {
                    if (this._isBlocksObject(subChild)) {
                        return Object.keys(subChild).reduce((acc, k) => {
                            acc[k] = `<div data-id="${
                                (subChild as BlocksObject)[k]._id
                            }"></div>`;
                            return acc;
                        }, {} as Record<string, string>);
                    }
                    return `<div data-id="${(subChild as Block)._id}"></div>`;
                });
            } else {
                (propsAndStubs as Record<string, any>)[
                    key
                    ] = `<div data-id="${child._id}"></div>`;
            }
        });

        const fragment = document.createElement('template');
        const render = Handlebars.compile(this._template, { noEscape: true });
        fragment.insertAdjacentHTML('afterbegin', render(propsAndStubs));

        const element = fragment.firstElementChild as HTMLElement;

        Object.values(this.children).forEach((child) => {
            if (Array.isArray(child)) {
                child.forEach((subChild) => {
                    if (this._isBlocksObject(subChild)) {
                        Object.keys(subChild).forEach((k) => {
                            const block = (subChild as BlocksObject)[k];
                            const stub = element.querySelector(`[data-id="${block._id}"]`);

                            if (!stub || !block.element) {
                                return;
                            }

                            stub.replaceWith(block.element);
                        });
                    } else {
                        const block = subChild as Block;
                        const stub = element.querySelector(`[data-id="${block._id}"]`);

                        if (!stub || !block.element) {
                            return;
                        }

                        stub!.replaceWith(block.element);
                    }
                });
            } else {
                const stub = element.querySelector(`[data-id="${child._id}"]`);

                if (!stub || !child.element) {
                    return;
                }

                stub!.replaceWith(child.element);
            }
        });

        return element;
    }

    getContent() {
        return this.element;
    }

    _isBlocksObject(obj: any): obj is BlocksObject {
        let isBlocksObject = true;

        Object.values(obj).forEach((val) => {
            if (!(val instanceof Block)) {
                isBlocksObject = false;
            }
        });
        return isBlocksObject;
    }

    _getChildren(propsAndChildren: Record<string, any | Block>): {
        children: Children;
        props: P;
    } {
        const children: Children = {};
        const props: P = {} as unknown as P;

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (
                value instanceof Block ||
                (Array.isArray(value) && value[0] instanceof Block) ||
                (Array.isArray(value) && value.every((el) => this._isBlocksObject(el)))
            ) {
                children[key] = value;
            } else {
                (props as Record<string, any>)[key] = value;
            }
        });

        return { children, props };
    }

    _makePropsProxy(props: P): P {
        return new Proxy(props as unknown as object, {
            get: (target: Record<string, unknown>, prop: string) => {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set: (target: Record<string, unknown>, prop: string, val) => {
                const oldProps = { ...target };
                target[prop] = val;

                this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                return true;
            },
            deleteProperty: () => {
                throw new Error('Нет прав');
            },
        }) as unknown as P;
    }

    show() {
        if (!this._element) {
            return;
        }

        this._element.style.display = 'block';
    }

    hide() {
        if (!this._element) {
            return;
        }

        this._element.style.display = 'none';
    }
}

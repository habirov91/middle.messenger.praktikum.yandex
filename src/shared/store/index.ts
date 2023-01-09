import { EventBus } from 'shared/classes';
import { Indexed } from '../types';
import { set } from '../functions/set';

export enum StoreEvents {
  Updated = 'updated',
}

class DefaultStore extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  }

  public empty() {
    this.state = {};
    this.emit(StoreEvents.Updated);
  }
}

export const Store = new DefaultStore();

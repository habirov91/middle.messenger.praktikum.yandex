import {METHODS, Options, OptionsWithoutMethod} from "./types";


function queryStringify(data: Record<string, any>) {
    // @ts-ignore
    const entries = Object.entries(data);
    // @ts-ignore
    return `?${entries.reduce((acc, [key, value], index) => {
        acc += `${key}=${value}`;
        if (index !== entries.length - 1) {
            acc += '&';
        }
        return acc;
    }, '')}`;
}

export class Request {
    get = (
        url: string,
        options: OptionsWithoutMethod = {},
    ): Promise<XMLHttpRequest> =>
        this.request(url, { ...options, method: METHODS.GET }, options.timeout);

    put = (
        url: string,
        options: OptionsWithoutMethod = {},
    ): Promise<XMLHttpRequest> =>
        this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

    post = (
        url: string,
        options: OptionsWithoutMethod = {},
    ): Promise<XMLHttpRequest> =>
        this.request(url, { ...options, method: METHODS.POST }, options.timeout);

    delete = (
        url: string,
        options: OptionsWithoutMethod = {},
    ): Promise<XMLHttpRequest> =>
        this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

    request = (
        url: string,
        options: Options = { method: METHODS.GET },
        timeout: number = 5000,
    ): Promise<XMLHttpRequest> => {
        const { method, data, headers = {} } = options;
        let params = '';

        if (method === METHODS.GET && data) {
            params = queryStringify(options.data);
        }

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, `${url}${params}`);

            xhr.onload = () => {
                resolve(xhr);
            };
// @ts-ignore
            Object.entries(headers).forEach(([header, val]) => {
                xhr.setRequestHeader(header, val);
            });

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}

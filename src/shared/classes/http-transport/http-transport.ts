import { METHODS, Options, OptionsWithoutMethod } from './types';

type HTTPMethod = (url: string, options?: OptionsWithoutMethod) => Promise<XMLHttpRequest>;

function queryStringify(data: Record<string, any>) {
  const entries = Object.entries(data);

  return `?${entries.reduce((acc, [key, value], index) => {
    acc += `${key}=${value}`;
    if (index !== entries.length - 1) {
      acc += '&';
    }
    return acc;
  }, '')}`;
}

export class HttpTransport {
  get: HTTPMethod = (url, options = {}): Promise<XMLHttpRequest> => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  put: HTTPMethod = (url, options = {}): Promise<XMLHttpRequest> =>
    this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post: HTTPMethod = (url, options = {}): Promise<XMLHttpRequest> =>
    this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete: HTTPMethod = (url, options = {}): Promise<XMLHttpRequest> =>
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

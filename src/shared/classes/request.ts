enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

interface Options<P> {
  method: Methods;
  data?: P;
  timeout?: number;
  headers?: Record<string, string>;
}

type OptionsWithoutMethod<P> = Omit<Options<P>, 'method'>;

export const staticUrl = 'https://ya-praktikum.tech/api/v2/resources';

const baseUrl = 'https://ya-praktikum.tech/api/v2/';

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

class RequestApi {
  get = <P, T>(
    url: string,
    options: OptionsWithoutMethod<P> = {},
  ): Promise<T> =>
    this.request(url, { ...options, method: Methods.GET }, options.timeout);

  put = <P, T>(
    url: string,
    options: OptionsWithoutMethod<P> = {},
  ): Promise<T> =>
    this.request<P, T>(
      url,
      { ...options, method: Methods.PUT },
      options.timeout,
    );

  post = <P, T>(
    url: string,
    options: OptionsWithoutMethod<P> = {},
  ): Promise<T> =>
    this.request<P, T>(
      url,
      { ...options, method: Methods.POST },
      options.timeout,
    );

  delete = <P, T>(
    url: string,
    options: OptionsWithoutMethod<P> = {},
  ): Promise<T> =>
    this.request<P, T>(
      url,
      { ...options, method: Methods.DELETE },
      options.timeout,
    );

  request = <P, T>(
    url: string,
    options: Options<P> = { method: Methods.GET },
    timeout: number = 5000,
  ): Promise<T> => {
    const { method, data, headers = {} } = options;
    let params = '';

    if (method === Methods.GET && data) {
      params = queryStringify(data);
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, `${baseUrl}${url}${params}`);

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      };

      Object.entries(headers).forEach(([header, val]) => {
        xhr.setRequestHeader(header, val);
      });

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      }

      xhr.withCredentials = true;

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      xhr.responseType = 'json';

      if (method === Methods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data));
      }
    });
  };
}

export const Request = new RequestApi();

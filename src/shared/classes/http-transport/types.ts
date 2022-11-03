export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Options = {
  method: METHODS;
  data?: any;
  timeout?: number;
  headers?: Record<string, string>;
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;

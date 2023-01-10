export type Nullable<T> = null | T;

export interface BlockProps {
  events?: {
    [key: string]: any;
  };
}

export interface ValidationSchema {
  [key: string]: {
    rule: RegExp | { equal: string } | ((params?: unknown) => unknown);
    error: string;
  };
}

export type FormValues = {
  [key: string]: string;
};

export type Indexed<T = any> = {
  [key in string]: T;
};

export type Nullable<T> = null | T;

export interface BlockProps {
  events?: {
    [key: string]: any;
  };
}

export type FormValues = Record<string, string>;

export interface ValidationSchema {
  [key: string]: {
    rule: RegExp | { equal: string };
    error: string;
  };
}

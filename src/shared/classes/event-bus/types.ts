export type Listener<T extends unknown[] = any[]> = (...args: T) => void;



export type TU<T extends Record<any, any>> = { [k in keyof T]?: T[k] }
/**
 * First
 */
export type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

export const first = <T extends any[]>(value: T): First<T> => {
    return value[0] as First<T>;
}

const a = first([1, 2, 3]);

/**
 * Last
 */
export type Last<T extends any[]> = T extends [...any[], infer U] ? U : never;

export const last = <T extends any[]>(value: T): Last<T> => {
    return value[value.length - 1] as Last<T>;
}

const b = last([1, 2, 3]);

/**
 * Length
 */
export type Length<T extends any[]> = T['length'];

export const length = <T extends any[]>(value: T): Length<T> => {
    return value.length as Length<T>;
}

const c = length([1, 2, 3]);

/**
 * Concat
 */
export type Concat<T extends any[], U extends any[]> = [...T, ...U];

export const concat = <T extends any[], U extends any[]>(value: T, value2: U): Concat<T, U> => {
    return [...value, ...value2] as Concat<T, U>;
}

const d = concat([1, 2], [3, 4]);

/**
 * Push
 */
export type Push<T extends any[], U> = Concat<T, [U]>;

export const push = <T extends any[], U>(value: T, value2: U): Push<T, U> => {
    return [...value, value2] as Push<T, U>;
}

const e = push([1, 2], 3);

/**
 * Unshift
 */

export type Unshift<T extends any[], U> = Concat<[U], T>;

export const unshift = <T extends any[], U>(value: T, value2: U): Unshift<T, U> => {
    return [value2, ...value];
}

const f = unshift([2, 3], 1);
const g = unshift([2, 3], 1) as Unshift<[2, 3], 1>;
const h = unshift([2, 3], 1) satisfies Unshift<[2, 3], 1>;

/**
 * Pop
 */
export type Pop<T extends any[]> = T extends [...infer U, any] ? U : never;

export const pop = <T extends any[]>(value: T): Pop<T> => {
    return value.slice(0, -1) as Pop<T>;
}

const i = pop([1, 2, 3]);
const j = pop([1, 2, 3]) as Pop<[1, 2, 3]>;

/**
 * Shift
 */
export type Shift<T extends any[]> = T extends [any, ...infer U] ? U : never;

export const shift = <T extends any[]>(value: T): Shift<T> => {
    return value.slice(1) as Shift<T>;
}

const k = shift([1, 2, 3]);
const l = shift([1, 2, 3]) as Shift<[1, 2, 3]>;

/**
 * Reverse
 */
export type Reverse<T extends any[]> = T extends [infer U, ...infer V] ? [...Reverse<V>, U] : T;

export const reverse = <T extends any[]>(value: T): Reverse<T> => {
    return value.reverse() as Reverse<T>;
}

const m = reverse([1, 2, 3]);
const n = reverse([1, 2, 3]) as Reverse<[1, 2, 3]>;

/**
 * Includes
 */
export type Includes<T extends any[], U> = U extends T[number] ? true : false;

export const includes = <T extends any[], U>(value: T, value2: U): Includes<T, U> => {
    return value.includes(value2) as Includes<T, U>;
}

const o = includes([1, 2, 3], 2);

/**
 * slice
 */
export type Slice<T extends any[], Start extends number, End extends number, Output extends unknown[] = []> =
    T extends [infer First, ...infer Rest]
        ? Output['length'] extends End
            ? Output
            : Output['length'] extends Start
                ? Slice<Rest, Start, End, [...Output, First]>
                : Slice<Rest, Start, End, Output>
        : Output;

export const slice = <T extends any[], Start extends number, End extends number>(value: T, start: Start, end: End): Slice<T, Start, End> => {
    return value.slice(start, end) as Slice<T, Start, End>;
}

const p = slice([1, 2, 3], 1, 2);
const q = slice([1, 2, 3], 1, 2) satisfies Slice<[1, 2, 3], 1, 2>;

type SliceTest = Slice<[1, 2, 3], 1, 2>;
export type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
export type Last<T extends any[]> = T extends [...any[], infer U] ? U : never;
export type Length<T extends any[]> = T['length'];

type Tuple = [1, 2, 3];

type FirstTest = First<Tuple>;

type LastTest = Last<Tuple>;

type LengthTest = Length<Tuple>;

export type Concat<T extends any[], U extends any[]> = [...T, ...U];

type ConcatTest = Concat<[1, 2], [3, 4]>;

export type Push<T extends any[], U> = Concat<T, [U]>;
export type Unshift<T extends any[], U> = Concat<[U], T>;
export type Pop<T extends any[]> = T extends [...infer U, any] ? U : never;

type PushTest = Push<[1, 2], 3>;
type UnshiftTest = Unshift<[2, 3], 1>;
type PopTest = Pop<[1, 2, 3]>;

export type Shift<T extends any[]> = T extends [any, ...infer U] ? U : never;

type ShiftTest = Shift<[1, 2, 3]>;
// export type IsAny<T> = boolean extends T ? true : false;
//
// type NumberIsAny = IsAny<number>;
// type AnyIsAny = IsAny<any>;
// type ObjectIsAny = IsAny<object>;
// type UnknownIsAny = IsAny<unknown>;
// type NeverIsAny = IsAny<never>;

export type IsAny<T> = true extends (false & T) ? true : false;

type NumberIsAny = IsAny<number>;
type AnyIsAny = IsAny<any>;
type ObjectIsAny = IsAny<object>;
type UnknownIsAny = IsAny<unknown>;
type NeverIsAny = IsAny<never>;
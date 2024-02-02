// IsNumber
export type IsNumber<T> = T extends number ? true : false;

export const isNumber = <T>(value: T): IsNumber<T> => {
    return (typeof value === 'number') as IsNumber<T>;
}

const a = isNumber(1);


// IsString
export type IsString<T> = T extends string ? true : false;

export const isString = <T>(value: T): IsString<T> => {
    return (typeof value === 'string') as IsString<T>;
}

const b = isString('1');


// IsBoolean
export type IsBoolean<T> = T extends boolean ? true : false;

export const isBoolean = <T>(value: T): IsBoolean<T> => {
    return (typeof value === 'boolean') as IsBoolean<T>;
}

const c = isBoolean(true);


// IsObject
export type IsObject<T> = T extends object ? true : false;

export const isObject = <T>(value: T): IsObject<T> => {
    return (typeof value === 'object') as IsObject<T>;
}

const d = isObject({});


// IsArray
export type IsArray<T> = T extends any[] ? true : false;

export const isArray = <T>(value: T): IsArray<T> => {
    return (Array.isArray(value)) as IsArray<T>;
}

const e = isArray([]);
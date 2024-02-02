/**
 * StartsWith
 *
 */
export type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;

export const startsWith = <T extends string, U extends string>(value: T, search: U): StartsWith<T, U> => {
    return value.startsWith(search) as StartsWith<T, U>;
}

const a = startsWith('abc', 'a');

/**
 * EndsWith
 */
export type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false;

export const endsWith = <T extends string, U extends string>(value: T, search: U): EndsWith<T, U> => {
    return value.endsWith(search) as EndsWith<T, U>;
}

const b = endsWith('abc', 'c');

/**
 * Includes
 */
export type Includes<T extends string, U extends string> = T extends `${string}${U}${string}` ? true : false;

export const includes = <T extends string, U extends string>(value: T, search: U): Includes<T, U> => {
    return value.includes(search) as Includes<T, U>;
}

const c = includes('abc', 'b');
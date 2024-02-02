/**
 * add
 */
export type MakeArray<Length extends number, T extends unknown, Arr extends T[] = []> = Arr['length'] extends Length ? Arr : MakeArray<Length, T, [T, ...Arr]>;

type Test = MakeArray<3, 1>['length'];

export function add(a: number, b: number): number {
  return a + b;
}
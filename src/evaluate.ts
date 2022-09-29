export function evaluate<T>(value: T, ...funcs: ((val: T) => boolean)[]): boolean {
  for (const func of funcs) {
    if (func(value) === false) {
      return false;
    }
  }
  return true;
}

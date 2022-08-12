export function pipeline<T>(initialValue: T, ...funcs: Array<(val: T) => T>): T {
  return funcs.reduce(
    (previousValue, currentFunction) => currentFunction(previousValue),
    initialValue,
  );
}

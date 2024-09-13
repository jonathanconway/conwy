export function iif<T>(conditional?: boolean, ifTrue?: T) {
  return conditional ? ifTrue : undefined;
}

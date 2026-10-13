export type StorageListener = <TState>(newValue: TState) => void;

export function isEventType<T extends Event>(
  event: Event,
  type: string,
): event is T {
  return event.type === type;
}

export function parseStorageValue<TState>(value: string | null) {
  if (value) {
    return JSON.parse(value) as TState | undefined;
  } else {
    return undefined;
  }
}

"use client";

import { useEffect, useState } from "react";

// import { isClient } from "../utils";
import {
  StorageListener,
  isEventType,
  parseStorageValue,
} from "./storage.utils";
import { useEvent } from "./use-event.hook";

function getValueFromSessionStorage<TState>(key: string): TState | undefined {
  // if (!isClient) {
  //   return undefined;
  // }

  const value = sessionStorage?.getItem(key);
  return parseStorageValue(value);
}

export function saveValueToSessionStorage<TState>(
  key: string,
  value: TState | undefined,
) {
  // if (!isClient) {
  //   return undefined;
  // }

  if (value) {
    sessionStorage?.setItem(key, JSON.stringify(value));
  } else {
    sessionStorage?.removeItem(key);
  }
}

type Setter<TState> = (newValue: TState) => void;

const SESSION_STATE_CHANGED = "sessionStateChanged";

class SessionStateChangedEvent<TState> extends Event {
  public newValue: TState;

  constructor(newValue: TState) {
    super(SESSION_STATE_CHANGED);

    this.newValue = newValue;
  }
}

export function useSessionStorage<TState>(
  key: string,
  defaultValue?: TState,
): [TState, Setter<TState>] {
  const [cachedValue, setCachedValue] = useState<TState>(
    defaultValue as TState,
  );

  useEffect(() => {
    setCachedValue(getValueFromSessionStorage(key) ?? (defaultValue as TState));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { addListener: addStorageListener } = useEvent<StorageEvent>("storage");
  const {
    addListener: addCacheChangedListener,
    dispatch: dispatchCacheChangedEvent,
  } = useEvent<SessionStateChangedEvent<TState>>(SESSION_STATE_CHANGED);

  const createStorageListener = (onChange: StorageListener) =>
    function (this: Window, event: Event | StorageEvent) {
      if (!isEventType<StorageEvent>(event, "StorageEvent")) {
        return;
      }

      if (event.storageArea !== window.sessionStorage) {
        return;
      }

      if (event.key !== key) {
        return;
      }

      onChange(parseStorageValue(event.newValue));
    } as StorageListener;

  useEffect(() => {
    addStorageListener(createStorageListener(setValue as StorageListener));
    addCacheChangedListener((event) => {
      setCachedValue(event.newValue);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = (value: TState) => {
    // if (!isClient) {
    //   return;
    // }

    setCachedValue(value);
    saveValueToSessionStorage(key, value);
    dispatchCacheChangedEvent(new SessionStateChangedEvent(value));
  };

  const value = cachedValue;

  return [value, setValue];
}

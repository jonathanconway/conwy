"use client";

import { useEffect, useState } from "react";

// import { isClient } from "../utils";

interface CustomEventListener<TEvent> {
  (event: TEvent): void;
}

type EventKey = string;

export function useEvent<TEvent extends Event>(eventKey: EventKey) {
  const [listeners, setListeners] = useState<
    [EventKey, CustomEventListener<TEvent>][]
  >([]);

  function dispatch(event?: TEvent) {
    // if (!isClient) {
    //   return;
    // }

    if (event) {
      window.dispatchEvent(event);
    } else {
      window.dispatchEvent(new Event(eventKey));
    }
  }

  function addListener(listener: CustomEventListener<TEvent>) {
    window.addEventListener(eventKey, listener as EventListener);

    setListeners((oldListeners) => [
      ...oldListeners,
      [eventKey, listener as CustomEventListener<Event>],
    ]);
  }

  function cleanup() {
    for (const [eventKey, listener] of listeners) {
      window.removeEventListener(eventKey, listener as EventListener);
    }
  }

  useEffect(
    () => cleanup,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    dispatch,
    addListener,
  };
}

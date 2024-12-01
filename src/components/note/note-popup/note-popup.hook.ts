"use client";

interface UseNotePopupParams {
  readonly noteId: string;
}

export function useNotePopup(params: UseNotePopupParams) {
  const notePopupOpenOnMatchingHashResult =
    useNotePopupOpenOnMatchingHash(params);

  return {
    ...notePopupOpenOnMatchingHashResult,
  };
}

function useNotePopupOpenOnMatchingHash({ noteId }: UseNotePopupParams) {
  const href = `#${noteId}`;

  global.window = global.window ?? { location: {} };

  const defaultIsOpen = global.window.location.hash === href;

  const setIsOpen = (isOpen: boolean) => {
    if (!isOpen && global.window.location.hash === href) {
      global.window.location.hash = "";
    }
  };

  return { href, defaultIsOpen, setIsOpen };
}

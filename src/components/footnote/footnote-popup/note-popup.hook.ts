"use client";

interface UseFootnotePopupParams {
  readonly noteId: string;
}

export function useFootnotePopup(params: UseFootnotePopupParams) {
  const notePopupOpenOnMatchingHashResult =
    useFootnotePopupOpenOnMatchingHash(params);

  return {
    ...notePopupOpenOnMatchingHashResult,
  };
}

function useFootnotePopupOpenOnMatchingHash({
  noteId,
}: UseFootnotePopupParams) {
  const href = `#${noteId}`;

  const defaultIsOpen = global?.window?.location?.hash === href;

  const setIsOpen = (isOpen: boolean) => {
    if (!isOpen && global?.window?.location?.hash === href) {
      global.window.location.hash = "";
    }
  };

  return { href, defaultIsOpen, setIsOpen };
}

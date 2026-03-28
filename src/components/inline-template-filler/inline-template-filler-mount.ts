import { waitFor } from "@/framework/client";

import * as styles from "./inline-template-filler.css";

type ElementsByToken = Record<string, Element[]>;

interface RootElement extends Element {
  elementsByToken?: ElementsByToken;
}

export function mountInlineTemplateFiller(
  rootElement: RootElement,
  currentElement?: Node,
) {
  const element = currentElement ?? rootElement;

  const isTemplatedTextNode = checkIsTemplatedTextNode(element);
  if (isTemplatedTextNode) {
    mountInlineTemplateFillerNode(rootElement, element);
  } else if (element.childNodes.length > 0) {
    for (const childNode of element.childNodes) {
      mountInlineTemplateFiller(rootElement, childNode);
    }
  }
}

function checkIsTemplatedTextNode(element: Node) {
  if (!("nodeName" in element && element.nodeName === "#text")) {
    return false;
  }

  const elementTextContent = element.textContent?.trim() ?? "";
  return elementTextContent.includes("≪") && elementTextContent.includes("≫");
}

async function mountInlineTemplateFillerNode(
  rootElement: RootElement,
  element: Node,
) {
  const elementsByToken: ElementsByToken = rootElement.elementsByToken ?? {};

  const elementTextContent = element.textContent?.trim() ?? "";
  const elementTextContentEscaped = elementTextContent
    .replaceAll("≪", "")
    .replaceAll("≫", "");

  const editableElement = document.createElement("span");
  editableElement.className = styles.editable;
  editableElement.innerText = elementTextContentEscaped;
  editableElement.setAttribute("contenteditable", "true");
  editableElement.addEventListener("focus", () => {
    setTimeout(() => {
      window.getSelection()?.selectAllChildren(editableElement);
    });
  });
  editableElement.addEventListener("keydown", (event) => {
    setTimeout(() => {
      const elementsWithMatchingToken =
        rootElement.elementsByToken?.[elementTextContentEscaped] ?? [];
      for (const element of elementsWithMatchingToken) {
        if (element !== event.target && element.tagName === "SPAN") {
          (element as HTMLSpanElement).innerText = (
            event.target as HTMLSpanElement
          ).innerText;
        }
      }
    });
  });

  elementsByToken[elementTextContentEscaped] =
    elementsByToken[elementTextContentEscaped] ?? [];
  elementsByToken[elementTextContentEscaped].push(editableElement);
  rootElement.elementsByToken = elementsByToken;

  await waitFor();

  const previousNode =
    element.parentNode?.childNodes[
      Array.from(element.parentNode.childNodes).indexOf(element as ChildNode) -
        1
    ] ??
    element.parentNode?.parentNode?.childNodes[
      Array.from(element.parentNode.parentNode?.childNodes).indexOf(
        element.parentNode as unknown as ChildNode,
      ) - 1
    ];
  if (!previousNode?.textContent?.includes(" ")) {
    const spaceBeforeNode = document.createTextNode(
      element.textContent?.split(elementTextContent)[0] ?? " ",
    );
    element.parentNode?.insertBefore(spaceBeforeNode, element);
  }

  element.parentNode?.insertBefore(editableElement, element);

  const nextNode =
    element.parentNode?.childNodes[
      Array.from(element.parentNode.childNodes).indexOf(element as ChildNode) +
        1
    ] ??
    element.parentNode?.parentNode?.childNodes[
      Array.from(element.parentNode.parentNode?.childNodes).indexOf(
        element.parentNode as unknown as ChildNode,
      ) + 1
    ];
  if (!nextNode?.textContent?.includes(" ")) {
    const spaceAfterNode = document.createTextNode(
      element.textContent?.split(elementTextContent)[1] ?? " ",
    );
    element.parentNode?.insertBefore(spaceAfterNode, element);
  }

  element.parentNode?.removeChild(element);
}

import { mdxComponentsExtendedNames } from "./src/mdx-components-extended-names";

interface Node {
  name: string;
  readonly type: string;
  readonly children: readonly Node[];
}

const jsxElementNames: readonly string[] = mdxComponentsExtendedNames;

/**
 * Remark plugin which renames lowercase JSX elements in MDX content (e.g.
 * `<small>`) to their capitalised component names (e.g. `<Small>`).
 *
 * MDX only applies component mappings to elements produced by Markdown syntax,
 * not to HTML elements written as JSX. Capitalised JSX elements, however, are
 * looked up in the component mapping, so renaming them lets
 * `useMDXComponents` supply the component.
 *
 * @example
 * // <small>Note</small> → <Small>Note</Small> → <MdxSmall>Note</MdxSmall>
 */
export function remarkMdxJsxComponents() {
  return (tree: Node) => {
    renameJsxElements(tree);
  };
}

function renameJsxElements(node: Node) {
  if (
    (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
    jsxElementNames.includes(node.name)
  ) {
    node.name = node.name[0].toUpperCase() + node.name.slice(1);
  }

  node.children?.forEach(renameJsxElements);
}

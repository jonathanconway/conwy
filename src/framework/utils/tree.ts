import { Maybe } from "./typing";

export interface Tree<TBranch, TLeaf> {
  readonly branch: TBranch;
  readonly children: readonly TLeaf[];

  readonly subBranches: readonly Tree<TBranch, TLeaf>[];
}

export function addTreeSubBranchChildren<TBranch, TLeaf>(
  tree: Tree<TBranch, TLeaf>,
  parentPath: readonly TBranch[],
  children: readonly TLeaf[],
) {
  if (parentPath.length === 0) {
    return {
      ...tree,
      children: [...tree.children, ...children],
    };
  }

  return {
    ...tree,
    subBranches: tree.subBranches.map(
      (subBranch: Tree<TBranch, TLeaf>): Tree<TBranch, TLeaf> => {
        if (subBranch.branch === parentPath[0]) {
          return addTreeSubBranchChildren(
            subBranch,
            parentPath.slice(1),
            children,
          );
        } else {
          return subBranch;
        }
      },
    ),
  };
}

export function addTreeSubBranchPath<TBranch, TLeaf>(
  tree: Tree<TBranch, TLeaf>,
  path: readonly TBranch[],
): Tree<TBranch, TLeaf> {
  if (path.length === 0) {
    return tree;
  }
  const subBranchAtPathFirst = tree.subBranches.find(
    (subBranch) => subBranch.branch === path[0],
  );
  const subBranchToAdd = subBranchAtPathFirst ?? {
    branch: path[0],
    children: [],
    subBranches: [],
  };

  return {
    ...tree,
    subBranches: subBranchAtPathFirst
      ? tree.subBranches.map(
          (subBranch: Tree<TBranch, TLeaf>): Tree<TBranch, TLeaf> => {
            if (subBranch.branch === path[0]) {
              return {
                ...subBranch,
                ...addTreeSubBranchPath(subBranchToAdd, path.slice(1)),
              };
            } else {
              return subBranch;
            }
          },
        )
      : [
          ...tree.subBranches,
          addTreeSubBranchPath(subBranchToAdd, path.slice(1)),
        ],
  };
}

export function addTreeSubBranch<TBranch, TLeaf>(
  tree: Tree<TBranch, TLeaf>,
  parentPath: readonly TBranch[],
  newSubBranch: TBranch,
): Tree<TBranch, TLeaf> {
  if (parentPath.length === 0) {
    return {
      ...tree,
      subBranches: [
        ...tree.subBranches,
        {
          branch: newSubBranch,
          children: [],
          subBranches: [],
        },
      ],
    };
  }

  return {
    ...tree,
    subBranches: tree.subBranches.map(
      (subBranch: Tree<TBranch, TLeaf>): Tree<TBranch, TLeaf> => {
        if (subBranch.branch === parentPath[0]) {
          return addTreeSubBranch(subBranch, parentPath.slice(1), newSubBranch);
        } else {
          return subBranch;
        }
      },
    ),
  };
}

export function getTreeSubBranchByPath<TBranch, TLeaf>(
  tree: Tree<TBranch, TLeaf>,
  path: readonly TBranch[],
): Maybe<Tree<TBranch, TLeaf>> {
  if (path.length === 0) {
    return tree;
  }

  const subBranchAtPathFirst = tree.subBranches.find(
    (subBranch) => subBranch.branch === path[0],
  );
  if (subBranchAtPathFirst) {
    return getTreeSubBranchByPath(subBranchAtPathFirst, path.slice(1));
  }
}

export function getTreeSubBranchDescendantsCount<TBranch, TLeaf>(
  tree: Tree<TBranch, TLeaf>,
): number {
  const childrenCount = tree.children.length;

  const descendantsCount = tree.subBranches.reduce(
    (previousValue, currentValue) =>
      previousValue + getTreeSubBranchDescendantsCount(currentValue),
    0,
  );

  return childrenCount + descendantsCount;
}

export function getTreeSubBranchByBranch<TBranch, TLeaf>(
  tree: Tree<TBranch, TLeaf>,
  branch: TBranch,
): Maybe<Tree<TBranch, TLeaf>> {
  if (tree.branch === branch) {
    return tree;
  }

  for (const subBranch of tree.subBranches) {
    const subSubBranchMatched = getTreeSubBranchByBranch(subBranch, branch);
    if (subSubBranchMatched) {
      return subSubBranchMatched;
    }
  }
}

export function getTreeLeavesFiltered<TBranch, TLeaf>(
  tree: Tree<TBranch, TLeaf>,
  filter: (child: TLeaf) => boolean,
): Tree<TBranch, TLeaf> {
  return {
    ...tree,
    children: tree.children.filter(filter),
    subBranches: tree.subBranches.map((subBranch) =>
      getTreeLeavesFiltered(subBranch, filter),
    ),
  };
}

export function getTreeLeaves<TBranch, TLeaf>(
  tree: Tree<TBranch, TLeaf>,
): readonly TLeaf[] {
  return [...tree.children, ...tree.subBranches.flatMap(getTreeLeaves)];
}

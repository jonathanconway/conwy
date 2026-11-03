# AGENTS.local.md

Learnings for AI agents working in this repository.

## vanilla-extract: never import the `@/framework` barrel from style-reachable code

vanilla-extract evaluates every `*.css.ts` file (and everything it transitively imports) in Node at build time. The `@/framework` barrel pulls in code that references `__filename`, which fails there with:

```
NonErrorEmittedError: ... ReferenceError: __filename is not defined
```

This applies to any module reachable from a `.css.ts` file — including `*.mixins.ts` files and anything re-exported from the same `index.ts` as a mixin (e.g. `components/focus-outline/index.ts` exports both mixins and `use-focus-outline.hook.ts`).

In those modules, import from the specific file instead, e.g. `@/framework/utils/keyboard`, not `@/framework`.

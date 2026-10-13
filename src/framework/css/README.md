# `css` folder

CSS modules can, and should only be, consumed in Vanilla Extract `.css.ts` files.

They typically contain only simple structures (objects and pure functions) and have very minimal outside dependencies.

> Note: CSS framework modules are suffixed with `.css_.ts`. This is to avoid Vanilla Extract confusing them for Vanilla Extract files, which are suffixed with `.css.ts`.

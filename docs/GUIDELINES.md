# Contributing

This file contains guidelines on how contributions should be made.

## Commit message

This project follows [conventional commits](https://www.conventionalcommits.org).

```
<type>(scope): <subject>

<body>

<footer>
```

Rules:

- ✅ **Required**: Type is be one of: `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- ✅ **Required**: Subject is lowercase
- ✅ **Required**: Body (if provided) is lowercase
- ✅ **Required**: No period at the end of the subject line
- ❌ **Forbidden** capitalize the subject or body
- ❌ **Forbidden** use past tense (for example: use "add" instead of "added")

## Review checklist

Follow all items in this checklist to review changes. Ensure they are all resolved without any issues before pushing to production.

1. Ensure all new and modified code follows all the standards defined or referenced in the Coding guidelines. See [Coding guidelines](#coding-guidelines) section in this file.
2. Run a full build, following the steps in [production build](CONTRIBUTING.md#production-build).

## Coding guidelines

This section contains coding guidelines such as naming and organisation of files and folders and coding standards.

### Naming of files and folders

- All source files have a name in `kebab-case`.
  - For example: `main.{extension}`
- All source files end with an extension, in the format: `{name}.{extension}`
  - For example: `main.ts`.
  - Extensions typically used include:
    - `.md` - Markdown files containing documentation
    - `.ts` - Typescript files containing structures such as functions, classes, objects, interface/type definitions, utils and more
    - `.tsx` - Typescript files containing HTML-style JSX, such as pages and components.
    - `.json` - Large data files, generally for large mocks and hard-coded data sets
    - `.css`
    - `.mdx`
    - `.json`
- Files can have sub extensions, in the format: `{sub-extension}.{extension}`.
  - For example: `text.css.ts`.
  - Sub extensions typically used include:
    - `.types.ts` - Interface or type definitions.
    - `.props.ts` - Component prop definitions.
    - `.css.ts` - CSS classes applied via the `className` attribute of React elements.
    - `.styles.ts` - Style objects applied via the `style` attribute of React elements.
    - `.mixins.ts` - Styling mixins.
    - `.consts.ts` - Constants.
    - `.utils.ts` - Utility functions, typically simple pure functions.
    - `.mocks.ts` - Mock objects and/or functions that generate mock objects.
    - `.svg.tsx` - Components that render SVG elements.
    - `.server.ts` - Files that can only run server side.
    - `.client.ts` - Files that can only run client side.

### Naming of code structures

#### General

- Interfaces, types, components and enums are in `PascalCase`
- Constants, variables and functions are in `camelCase`

#### Boolean

- Boolean prefixes:
  - `has`
  - `is`
  - `does`
  - `can`
  - `should`
  - `will`
  - etc.
- Prefix boolean variables and constants with one of the boolean prefixes. Example: `hasClassName`.
- Prefix boolean functions with `check` and one of the above. Example: `checkHasClassName`.

#### Components

- React components should be in title case. Example: `Text`.
- React component props should be named the same as the component suffixed by `Props`. Example: `TextProps`.
- React component subtypes:
  - Page components. Suffixed with `Page`. These render a whole page.
  - Layout components. Suffixed with `Layout`. These are passed slots and configuration and only lay out the slots.
  - Part components. Suffixed with `Part`. These present part of a larger object.

#### Folder structure

- Components consumed by unrelated components should be placed in their own individual folders.
  - Example:
    - 📁 `src/components/text`
      - 📄 `text.tsx`
- Components which have related styles, hooks, utils or other modules should similarly placed in their own individual folders.
  - Example:
    - 📁 `src/components/text`
      - 📄 `text.tsx`
      - 📄 `text.css.ts`
- Components consumed by only one closely related component should be placed in the same folder as their consumer.
  - Example:
    - 📁 `src/components/link-box`
      - 📄 `link-box.tsx`
      - 📄 `link-box-title.tsx` <-- consumed only by `link-box.tsx`.

#### Props

- Render props of type `ReactNode` (other than `children`) should be suffixed with `Slot`. Example: `asideSlot`.
- Render props of type `() => ReactNode` should be suffixed with `Slot` and prefixed with `render`. Example: `renderLabelSlot`.
- Props whose value is appended to a list of default values should be suffixed with `extended`. Example: `classNameExtended`.

### Internal code structures ordering

#### Declaration ordering

- Exported structures should precede non exported (private) structures
- Shorter names should precede longer names
- Dependencies of exported structures should come after the structures that depend on them

#### Component ordering

- Transformations of props should precede everything else
- Hook consumption should come as early as possible
- Return of rendered JSX should come last

### Comments

Self-documenting code is preferred with inline comments used minimally where important information is be expressed in code.

Non-trivial functions and other structures have explanatory JSDoc comments.

JSDoc comments should be formatted as follows:

> ```
> /**
>  * @name (only if not provided by code)
>  *
>  * {brief multi-line description}
>  *
>  * @example (optional)
>  * @type (if not provided by code)
>  */
> ```

### Styling

Styling is structured into 3 distinct layers:

- CSS (`*.css.ts` files)
- Mixins (`*.mixin.ts` files)
- Consts (`*.const.ts` files)

#### CSS

Vanilla Extract styles. Applied to elements via exported classes built with the `style` constructor and (sparingly) via `globalStyle` calls.

#### Mixins

Simple, reusable, modular, combinable style objects. Consumed by CSS or elsewhere.

Style objects exported by a mixin are typically of type `CSSProperties`.

#### Consts

Simple, reusable, modular, combinable values

Const objects exported by a const are typically maps to simple value types, such as `string`, `number`, etc.

### Server side and client side only

### Documentation

Documentation that applies to all code within a folder can be found in a `README.md` file in that folder.

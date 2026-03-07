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

- All source files are named in `kebab-case`
- All source files end with an extension of `.md`, `ts`, `.tsx`, `.json`, `.css` or `.mdx`
- Files have the following extensions:
  - `.md` - Markdown files containing documentation
  - `.ts` - Typescript files containing structures such as functions, classes, objects, interface/type definitions, utils and more
  - `.tsx` - Typescript files containing HTML-style JSX, such as pages and components.
  - `.json` - Large data files, generally for large mocks and hard-coded data sets

### Code naming

- Interfaces, types, components and enums are in `PascalCase`
- Constants, variables and functions are in `camelCase`

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

### Documentation

Documentation that applies to all code within a folder can be found in a `README.md` file in that folder.

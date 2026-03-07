# Contributing

This file contains guidance on how to contribute to the project.

## Project setup

1. Installation
2. Build
3. Run

### Installation

```sh
npm install
npx playwright install
```

### Build

```sh
npm run build:all
```

### Run

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production build

Before releasing to Production, the following scripts should be run and any issues resolved:

1. Build for production
2. Unit tests
3. Lint
4. Format

### Build for production:

```sh
npm run build:prod
```

Type-Check, Compile and Minify for Production:

### Unit tests

```sh
npm run test
```

### Lint

```sh
npm run lint
```

### Format

```sh
npm run format
```

## Tech stack

- Languages
  - [Typescript](http://typescriptlang.org) / [TSX](https://react.dev/learn/typescript) for framework, pages, components, types, builders and tools
  - [Javascript](https://ecma-international.org/publications-and-standards/standards/ecma-262/) for configuration and some UI libraries
  - [MDX](https://mdxjs.com) for content
  - [HTML](https://html.spec.whatwg.org/) and [CSS](https://w3.org/TR/CSS/#css) as target for browsers
- Packages
  - [NPM](https://npmjs.com)
- Framework
  - [NextJS](http://nextjs.org) for organised static site generation using server-side rendered (SSR) components
- Libraries
  - [MUI](https://mui.com) for icons
  - [MdxJs](https://mdxjs.com), [marked](https://marked.js.org), [remark-gfm](https://remark.js.org) for Markdown handling
  - [MermaidJS](https://github.com/mermaid-js/mermaid-cli) for diagrams
  - [Cheerio](https://cheerio.js.org) for parsing inputted HTML files (such as the follows feature)
  - [Lodash](https://lodash.com) for utilities such as object traversal, string parsing and memoization
  - [Luxon](https://moment.github.io/luxon) for date-time handling such as article dates and work start/end dates
  - [Pluralize](https://github.com/plurals/pluralize) for pluralising text
  - [PrismJS](https://prismjs.com) for syntax highlighted code blocks
  - [VanillaExtract](https://vanilla-extract.style) for strongly-typed stylesheets
- Testing
  - [Vitest](http://vitest.dev) for the test runner
  - [React Testing Library](https://testing-library.com) for unit testing components

## Guidelines for contributors

See `docs/GUIDELINES.md` for instructions on how code should be written.

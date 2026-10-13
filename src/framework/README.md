# `framework` folder

Framework modules provide higher level abstractions and capabilities consumed by components, builders, etc.

## Environment separation

Some modules can only be consumed in one or more specific environment(s). These are suffixed and carefully separated by selective barrel exporting.

- `server` / `.server.ts` - can only be consumed in server side modules
- `client` / `.client.ts` - can only be consumed in client side modules
- `css` / `.css_.ts` - can only be consumed in style sheets

Modules that can be executed in any environment are exported publicly in the usual way.

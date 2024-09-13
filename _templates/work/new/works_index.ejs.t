---
inject: true
to: src/content/works/index.ts
append: true
skip_if: <%= name %>
---
export * from "./<%= name %>";

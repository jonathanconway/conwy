---
inject: true
to: src/content/articles/index.ts
append: true
skip_if: <%= name %>
---
export * from "./<%= name %>";

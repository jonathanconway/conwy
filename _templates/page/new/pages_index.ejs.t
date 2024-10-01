---
inject: true
to: src/content/pages/index.ts
append: true
skip_if: <%= name %>
---
export * from "./<%= name %>";

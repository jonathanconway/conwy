---
inject: true
to: src/content/projects/index.ts
append: true
skip_if: <%= name %>
---
export * from "./<%= name %>";

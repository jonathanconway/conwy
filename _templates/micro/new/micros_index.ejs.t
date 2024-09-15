---
inject: true
to: src/content/micros/index.ts
append: true
skip_if: <%= name %>
---
export * from "./<%= name %>";

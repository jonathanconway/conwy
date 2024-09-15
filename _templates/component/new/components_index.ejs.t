---
inject: true
to: src/components/index.ts
append: true
skip_if: <%= name %>
---
export * from "./<%= name %>";

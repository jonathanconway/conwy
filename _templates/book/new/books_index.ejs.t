---
inject: true
to: src/content/books/index.ts
append: true
skip_if: <%- name %>
---
export * from "./<%- name %>";

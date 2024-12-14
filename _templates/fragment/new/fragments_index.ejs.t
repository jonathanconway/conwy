---
inject: true
to: src/content/fragments/index.ts
append: true
skip_if: <%- name %>
---
export * from "./<%- name %>";

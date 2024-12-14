---
inject: true
to: src/content/tools/index.ts
append: true
skip_if: <%- name %>
---
export * from "./<%- name %>";

---
inject: true
to: src/content/podcasts/index.ts
append: true
skip_if: <%- name %>
---
export * from "./<%- name %>";
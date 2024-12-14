---
inject: true
to: src/content/micros/index.ts
append: true
skip_if: <%- h.contentName() %>
---
export * from "./<%- h.contentName() %>";

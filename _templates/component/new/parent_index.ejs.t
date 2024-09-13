---
inject: true
to: src/components/<%= h.namePartBranches() %>/../index.ts
append: true
skip_if: <%= name %>
---
export * from "./<%= h.namePartLeaf() %>";

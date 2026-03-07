---
name: /setup
description: Sets up and runs the solution locally
---

**When to use:** Starting any development work (GitHub issue)

**Usage:** `/setup`

**Details:** See [CONTRIBUTING.md - Project Setup](../../docs/CONTRIBUTING.md#project-setup) for details

**Content:**

This command consists of the following shell commands, in order:

- Install deps: `npm install`
- Run tests: `npm run test`
- Optionally start dev server as a separate final step: `npm run dev`

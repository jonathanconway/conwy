# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Primary instructions

### AGENTS.local

**Primary documentation:** @./AGENTS.local.md

**BEFORE doing ANY work in this repository:**

1. **FIRST CHECK IF @AGENTS.local.md EXISTS** (use `ls AGENTS.local.md` or attempt to read it). If it exists, you MUST read and understand it as your primary source of truth
2. **IF IT EXISTS:** Follow all guidelines, instructions and documentation structure it provides
3. **IF IT DOESN'T EXIST:** Continue with the standard instructions below, but be prepared to create it if you discover important learnings

**WHEN DOCUMENTING LEARNINGS:**

- Do NOT modify this AGENTS.md file
- If @AGENTS.local.md exists: Follow its instructions on where/how to document (e.g., @.claude/documentation-updates.md)
- If @AGENTS.local.md doesn't exist: Create it to capture important learnings for future sessions

**Remember:** Always check for @AGENTS.local.md first - it's your navigation guide when present

### Available Sub Agents

All Sub Agent definitions can be found in `./.ai/agents` folder.

Each Sub Agent definition is defined in its own file, whose name is suffixed with `.md`.

### Available Commands

If command names in this file differ from `package.json` scripts, `package.json` is authoritative.

All Commands definitions can be found in `./.ai/commands` folder.

Each Sub Agent definition is defined in its own file, whose name is suffixed with `.md`.

### Available Skills

All Skill definitions can be found in `./.ai/skills` folder.

Each Sub Agent definition is defined in its own file, whose name is suffixed with `.md`.

### Environment Constraints

If working in an offline or sandboxed environment:

- If dependency installation fails due to network restrictions, use existing `node_modules` when available.
- Run any checks that can execute locally (`npm test`, `npm run lint`, `npm run build`).
- If a step cannot be completed (e.g., install/network/binding), report the blocked step and error clearly.

## Environment Setup

Before making any changes, follow the instructions in `docs/CONTRIBUTING.md` under `## Project setup`.

## Commit messages

While making changes, before each commit, follow the instructions in `docs/GUIDELINES.md` under `## Commit messages`.

## Review checklist

After making any changes, before pushing to production, follow the instructions in `docs/GUIDELINES.md` under `## Review checklist`.

## Additional context

Additional guidance to AI agents can be that applies to all code within a folder can be found in an `AGENTS.md` file in that folder.

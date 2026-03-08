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

### Agents

An agent is a definition of a persona, tools and a scope of responsibility, used to configure a worker with instructions so it can perform tasks autonomously.

#### How to use agents

- Read the role definition of the agent in the `.ai/agents/\*/AGENT.md` (what it should do)
- Be guided by AGENT.md rules (how it should behave)
- Use skills from `.ai/skills/\*/SKILL.md` (specialized workflows)

All Agent definitions can be found in `./.ai/agents` folder.
Each Agent definition is defined in its own file, named `AGENT.md`.

#### Available agents

- `front-end-developer`: Senior frontend developer specializing in modern web applications, building high quality user interfaces. (File: `.ai/agents/front-end-developer/AGENT.md`)

### Commands

A command is a named procedure (often mapping to one or more shell/package scripts) for repeatable actions like setup, build, test, or release.

#### How to use commands

All Command definitions can be found in `./.ai/commands` folder.
Each Command definition is defined in its own file, named `COMMAND.md`.

### Skills

A skill is a set of local instructions stored in a `SKILL.md` file.

#### How to use skills

- Trigger rules: If the user mentions a skill name (e.g. `$commit` or `commit`), use that skill for this turn.
- Discovery: Load only the referenced skill file first; follow linked files only if needed.
- Execution: Prefer skill-provided scripts/commands over re-implementing steps.
- Missing skill: If a named skill does not exist, state that and continue with best-effort fallback.

All Skill definitions can be found in `./.ai/skills` folder.
Each Skill definition is defined in its own file, named `SKILL.md`.

#### Available skills

- `commit`: Create valid commit messages, run commitlint, and perform `git commit`. (File: `.ai/skills/commit/SKILL.md`)

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

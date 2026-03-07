---
name: commit
description: "Use this skill whenever you need to commit changes to the local development branch."
---

# Commit message creation, commit message validity check and committing

Specific instructions on how to create a correctly formatted commit message (using `commitlint`) and how to commit changes (using `git`).

## Overview

Process to follow when committing changes:

1. Commit message creation
2. Commit message validity check
3. Commit command

## Commit message creation

Always create a valid commit message.

Follow the rules found in the root `README.md` under the "Git commit messages" heading.

**Valid commit examples:**

```bash
feat(modal): add dynamic height support

fix(button): resolve hover state issue in dark mode

docs: update installation instructions for new developers
```

**Invalid commit examples:**

```bash
# ❌ Wrong - subject capitalized
feat (modal): Add dynamic height support

# ❌ Wrong - body starts with uppercase
fix(button): resolve issue

The button was not working correctly.

# ❌ Wrong - subject has period at end
docs: update readme.

# ❌ Wrong - past tense
feat(modal): added dynamic height support
```

## Commit message validity check

To check your commit message, run the `commitlint` tool, where `<message>` is your message:

```bash
echo "<message>" | pnpx -- commitlint
```

If the result contains "problems" or "warnings" then read the advice carefully, change your commit message accordingly, then re-run the `commitlint` command. Keep doing this in a loop until there are no more "problems" or "warnings" in the result.

Then run the Commit command.

## Commit command

**IMPORTANT: Before running a Commit command, always Check your commit message!**

Run the `git commit` command to commit changes, where `<message>` is your message:

```bash
git commit -m "<message>"
```

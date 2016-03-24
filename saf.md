---
layout: default
---

# Syncing and Forking

## Configure your repository for a fork

List the current remotes for your fork: `git remote -v`. It should show

`origin  https://github.com/YOUR_USERNAME/CapeTownGreen.git (fetch)`

`origin  https://github.com/YOUR_USERNAME/CapeTownGreen.git (push)`.

Now add the codeX version of the repository as an upstream repository:

`git remote add upstream https://github.com/codex-academy/CapeTownGreen.git`.

Let's check that it works using: `git remote -v`. You should now see the two `origin`s from before, plus

`upstream https://github.com/codex-academy/CapeTownGreen.git (fetch)`

`upstream https://github.com/codex-academy/CapeTownGreen.git (push)`

## Sync your fork

Run `git fetch upstream` to get the most recent updates from the codex version of the repository. Now merge those changes into your `gh-pages` branch by running `git merge upstream/gh-pages`.

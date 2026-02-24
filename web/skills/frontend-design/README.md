# frontend-design skill

Sourced from the official Anthropic Claude Code plugins repo:
https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design

Authors: Prithvi Rajasekaran, Alexander Bricken (Anthropic)

## What it does

Auto-invoked by Claude when building web components, pages, or applications.
Guides Claude to produce **distinctive, production-grade frontend interfaces** that avoid generic "AI slop" aesthetics.

## How to install

Copy `SKILL.md` into your Claude skills folder:

```bash
mkdir -p ~/.claude/skills/frontend-design
cp SKILL.md ~/.claude/skills/frontend-design/SKILL.md
```

The skill is auto-invoked — no slash command needed. Just ask Claude to build a UI.

## What changes

- Picks a **bold, intentional aesthetic direction** before writing code (brutalist, editorial, retro-futuristic, etc.)
- Avoids overused fonts (Inter, Roboto, Arial) and clichéd color schemes (purple gradients)
- Uses distinctive font pairings, CSS animations, spatial composition, and atmospheric backgrounds
- Matches complexity of code to complexity of the visual direction

# Quick Reference - Submodule Cheat Sheet

**Keep this handy!** Quick commands for working with the Anthropic Skills submodule.

---

## 🚀 Essential Commands

### First Time Setup (After Cloning)
```bash
cd Claude-Skills
git submodule update --init --recursive
```
**What it does:** Downloads Anthropic Skills from GitHub
**Time:** 30-60 seconds

### Update Anthropic Skills (When New Version Available)
```bash
git submodule update --remote --merge
```
**What it does:** Gets latest version from Anthropic's GitHub
**Time:** 10-30 seconds

### Check Current Version
```bash
git submodule status
```
**Output:** Shows the commit ID you're using

---

## 🔍 Understanding Submodules

**Simple Way to Think About It:**
```
Your Claude-Skills project
         ↓
    Has a bookmark file (.gitmodules)
         ↓
    Points to → https://github.com/anthropics/skills.git
         ↓
    When you need files → Git downloads them from there
         ↓
    When Anthropic updates → You can easily get updates
```

---

## 📋 What You Have

### The Bookmark File
```bash
cat .gitmodules
```
Shows: `[submodule "anthropic-skills"]` and the GitHub URL

### The Linked Folder
```bash
ls -la anthropic-skills/
```
Shows: The live Anthropic Skills repository

### Current Version
```bash
git submodule status
```
Shows: The exact commit you're using

---

## 🎯 Common Tasks

| Task | Command | Time |
|------|---------|------|
| Clone repo with submodule | `git clone [url] && cd Claude-Skills && git submodule update --init --recursive` | 1 min |
| Update to latest | `git submodule update --remote --merge` | 30 sec |
| Check version | `git submodule status` | 5 sec |
| See what's new | `cd anthropic-skills && git log --oneline` | 10 sec |

---

## ❓ Common Questions

**Q: Will the folder be empty when I clone?**
A: Yes, until you run `git submodule update --init --recursive`

**Q: How often should I update?**
A: As often as you want. Check GitHub for new releases.

**Q: Can I revert to an older version?**
A: Yes, use `cd anthropic-skills && git checkout [commit-hash]`

**Q: Will my changes be saved?**
A: Don't edit files in `anthropic-skills/` - it's managed by Git.

**Q: Is it safe to update?**
A: Yes! Just commit it like any other change.

---

## 🚨 If Something Goes Wrong

### Folder is empty
```bash
git submodule update --init --recursive
```

### Submodule pointing to wrong version
```bash
git submodule update --remote --merge
git add anthropic-skills
git commit -m "Update to latest Anthropic Skills"
```

### Need to remove submodule (probably won't need to)
```bash
git submodule deinit -f anthropic-skills
rm -rf .git/modules/anthropic-skills
git rm -f anthropic-skills
```

---

## 💡 Remember

**Copy Method** = Photocopy (frozen, outdated)  
**Submodule Method** = Bookmark (live, current) ← You are here! ✅

---

## 📚 Full Documentation

For detailed information, read:
- `SUBMODULE_GUIDE.md` - Complete guide with examples
- `MERGE_ANALYSIS.md` - Why this approach is best
- `.gitmodules` - The configuration file

---

**Last Updated:** 2026-03-01
**Repository:** https://github.com/anthropics/skills.git


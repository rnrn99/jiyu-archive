---
name: verification-loop
description: A comprehensive verification system for Claude Code sessions. Run after completing a feature, before creating a PR, or after refactoring.
origin: ECC
---

# Verification Loop Skill

A comprehensive verification system for Claude Code sessions.

## When to Use

- After completing a feature or significant code change
- Before creating a PR
- After refactoring

## Verification Phases

### Phase 1: Build Verification

```bash
yarn build 2>&1 | tail -20
```

If build fails, STOP and fix before continuing.

### Phase 2: Type Check

```bash
npx tsc --noEmit 2>&1 | head -30
```

Report all type errors. Fix critical ones before continuing.

### Phase 3: Lint Check

```bash
yarn lint 2>&1 | head -30
```

### Phase 4: Test Suite

```bash
yarn test -- --coverage 2>&1 | tail -50
# Target: 80% minimum coverage
```

Report: total tests / passed / failed / coverage %.

### Phase 5: Security Scan

```bash
# Check for exposed secrets
grep -rn "sk-" --include="*.ts" --include="*.tsx" src/ | head -10

# Check for leftover console.log
grep -rn "console.log" --include="*.ts" --include="*.tsx" src/ | head -10
```

### Phase 6: Diff Review

```bash
git diff --stat
git diff HEAD~1 --name-only
```

Review each changed file for unintended changes, missing error handling, edge cases.

## Output Format

```
VERIFICATION REPORT
==================

Build:     [PASS/FAIL]
Types:     [PASS/FAIL] (X errors)
Lint:      [PASS/FAIL] (X warnings)
Tests:     [PASS/FAIL] (X/Y passed, Z% coverage)
Security:  [PASS/FAIL] (X issues)
Diff:      [X files changed]

Overall:   [READY/NOT READY] for PR

Issues to Fix:
1. ...
2. ...
```

## Integration

This skill complements PostToolUse hooks but provides deeper verification.
Hooks catch issues immediately; this skill provides comprehensive review.

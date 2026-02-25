Use the **code-reviewer** agent to perform a comprehensive review of uncommitted changes.

## Instructions

1. Run `git diff --name-only HEAD` to identify changed files
2. Review each file against the checklist below
3. Generate a structured report with severity levels
4. **Block commit if CRITICAL or HIGH issues are found**

## Review Checklist

### Security — CRITICAL
- [ ] No hardcoded credentials, API keys, or tokens
- [ ] No SQL injection (use parameterized queries)
- [ ] No XSS (sanitize HTML output)
- [ ] No path traversal via unsanitized input
- [ ] All endpoints have authentication/authorization
- [ ] No sensitive data in error messages or logs

### Code Quality — HIGH
- [ ] Functions ≤ 50 lines
- [ ] Files ≤ 800 lines
- [ ] Nesting depth ≤ 4 levels
- [ ] All errors handled (no unhandled promise rejections)
- [ ] No `console.log` in production code
- [ ] No TODO/FIXME left in new code

### Best Practices — MEDIUM
- [ ] No mutation (use immutable patterns)
- [ ] New code has corresponding tests
- [ ] No accessibility (a11y) regressions

### React / Next.js Specific
- [ ] `useEffect` dependency arrays are correct
- [ ] No state mutations during render
- [ ] List items have stable `key` props
- [ ] No unnecessary prop drilling
- [ ] Server/client component boundaries are correct

## Report Format

```
CODE REVIEW REPORT
──────────────────────────────────────────
File: src/path/to/file.tsx (line 42)
Severity: CRITICAL
Issue: Hardcoded API key in source code
Fix: Move to environment variable

File: src/path/to/other.tsx (line 123)
Severity: HIGH
Issue: Function exceeds 50 lines (currently 87)
Fix: Extract helper functions

──────────────────────────────────────────
Summary: 1 CRITICAL, 1 HIGH, 0 MEDIUM
Verdict: BLOCKED ❌
──────────────────────────────────────────
```

Verdict options:
- **APPROVE** ✅ — No CRITICAL or HIGH issues
- **WARNING** ⚠️ — HIGH issues only (address before merge)
- **BLOCKED** ❌ — CRITICAL issues present (must fix before commit)

**Never approve code with security vulnerabilities!**

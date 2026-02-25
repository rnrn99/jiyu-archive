Use the **planner** agent to create a comprehensive implementation plan.

## Instructions

1. Activate the `planner` agent with the user's request
2. The planner will analyze requirements and produce a structured plan
3. **DO NOT write any code until the user explicitly confirms the plan**
4. Present the plan and wait for one of:
   - `yes` / `proceed` → Begin implementation
   - `modify: [details]` → Adjust the plan
   - `different approach: [description]` → Propose alternative

## When to Use

- Starting a new feature
- Major architectural changes
- Complex refactoring spanning multiple files
- Ambiguous or unclear requirements

## Plan Output Format

```markdown
# Implementation Plan: [Feature Name]

## Overview
[2-3 sentence summary]

## Requirements
- [Requirement 1]

## Architecture Changes
- [Change: file path and description]

## Implementation Steps

### Phase 1: [Phase Name]
1. **[Step Name]** (File: path/to/file.ts)
   - Action: Specific action
   - Dependencies: None / Requires step X
   - Risk: Low/Medium/High

## Testing Strategy
- Unit tests: [files to test]
- Integration tests: [flows to test]

## Risks & Mitigations
- **Risk**: [Description] → Mitigation: [How to address]

## Success Criteria
- [ ] Criterion 1
```

## Next Steps After Plan Approval

- `/tdd` — Implement with test-driven development
- `/build-fix` — If build errors arise during implementation
- `/code-review` — Review after implementation

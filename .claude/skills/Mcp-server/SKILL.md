```markdown
# Mcp-server Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `Mcp-server` TypeScript codebase. You'll learn about file naming, import/export styles, commit message patterns, and how to write and run tests. The guide also provides suggested commands for common workflows to streamline your development process.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userService.ts`, `gameManager.ts`

### Import Style
- Use **relative imports** for referencing modules.
  - Example:
    ```typescript
    import { getUser } from './userService';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    // userService.ts
    export function getUser(id: string) { ... }
    ```

### Commit Messages
- Use the `feat` prefix for new features.
- Commit messages are concise, averaging around 34 characters.
  - Example: `feat: add player disconnect handler`

## Workflows

_No automated workflows detected in this repository._

## Testing Patterns

- **Test File Naming:** Test files follow the `*.test.*` pattern.
  - Example: `userService.test.ts`
- **Testing Framework:** Not explicitly detected; check project dependencies or ask maintainers for specifics.
- **Test Example:**
    ```typescript
    // userService.test.ts
    import { getUser } from './userService';

    test('should return user by ID', () => {
      expect(getUser('123')).toEqual({ id: '123', name: 'Alice' });
    });
    ```

## Commands
| Command | Purpose |
|---------|---------|
| /run-tests | Run all test files matching `*.test.*` |
| /lint     | Lint the codebase according to project standards |
| /commit   | Make a commit following the `feat` prefix convention |
```
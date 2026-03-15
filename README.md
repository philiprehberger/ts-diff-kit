# @philiprehberger/diff-kit

Object and array diffing with typed patches.

## Installation

```bash
npm install @philiprehberger/diff-kit
```

## Usage

```ts
import { diff, applyPatch, revertPatch, hasChanges, summarize } from '@philiprehberger/diff-kit';

const changes = diff(oldUser, newUser);
// [{ type: 'update', path: ['age'], oldValue: 30, newValue: 31 }]

const restored = revertPatch(newUser, changes); // equals oldUser
summarize(changes); // "Updated age"
hasChanges(a, b);   // true (fast)
```

## API

| Function | Description |
|----------|-------------|
| `diff(old, new, options?)` | Deep diff two objects |
| `applyPatch(obj, changes)` | Apply changes to an object |
| `revertPatch(obj, changes)` | Undo changes |
| `hasChanges(old, new)` | Quick boolean check |
| `summarize(changes)` | Human-readable summary |
| `diffArrays(old, new, { key })` | Diff arrays by identity key |

## License

MIT

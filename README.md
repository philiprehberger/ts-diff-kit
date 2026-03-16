# @philiprehberger/ts-diff-kit

[![CI](https://github.com/philiprehberger/ts-diff-kit/actions/workflows/publish.yml/badge.svg)](https://github.com/philiprehberger/ts-diff-kit/actions/workflows/publish.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/ts-diff-kit.svg)](https://www.npmjs.com/package/@philiprehberger/ts-diff-kit)
[![License](https://img.shields.io/github/license/philiprehberger/ts-diff-kit)](LICENSE)

Object and array diffing with typed patches.

## Installation

```bash
npm install @philiprehberger/ts-diff-kit
```

## Usage

```ts
import { diff, applyPatch, revertPatch, hasChanges, summarize } from '@philiprehberger/ts-diff-kit';

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


## Development

```bash
npm install
npm run build
npm test
```

## License

MIT

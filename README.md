# @philiprehberger/diff-kit

[![CI](https://github.com/philiprehberger/ts-diff-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-diff-kit/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/diff-kit.svg)](https://www.npmjs.com/package/@philiprehberger/diff-kit)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/ts-diff-kit)](https://github.com/philiprehberger/ts-diff-kit/commits/main)

Object and array diffing with typed patches

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

## Development

```bash
npm install
npm run build
npm test
```

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/ts-diff-kit)

🐛 [Report issues](https://github.com/philiprehberger/ts-diff-kit/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/ts-diff-kit/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)

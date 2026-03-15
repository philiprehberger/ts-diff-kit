import type { Change, DiffOptions, Path } from './types';

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function diffInternal(oldVal: unknown, newVal: unknown, path: Path, options: DiffOptions, depth: number): Change[] {
  if (options.maxDepth !== undefined && depth > options.maxDepth) {
    if (oldVal !== newVal) {
      return [{ type: 'update', path, oldValue: oldVal, newValue: newVal }];
    }
    return [];
  }

  if (oldVal === newVal) return [];

  if (!isObject(oldVal) || !isObject(newVal)) {
    if (oldVal !== newVal) {
      return [{ type: 'update', path, oldValue: oldVal, newValue: newVal }];
    }
    return [];
  }

  const changes: Change[] = [];
  const allKeys = new Set([...Object.keys(oldVal), ...Object.keys(newVal)]);

  for (const key of allKeys) {
    const childPath = [...path, key];
    if (!(key in oldVal)) {
      changes.push({ type: 'add', path: childPath, value: newVal[key] });
    } else if (!(key in newVal)) {
      changes.push({ type: 'remove', path: childPath, oldValue: oldVal[key] });
    } else {
      changes.push(...diffInternal(oldVal[key], newVal[key], childPath, options, depth + 1));
    }
  }

  return changes;
}

export function diff(oldObj: unknown, newObj: unknown, options: DiffOptions = {}): Change[] {
  return diffInternal(oldObj, newObj, [], options, 0);
}

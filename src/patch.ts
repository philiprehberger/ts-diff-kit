import type { Change } from './types';

function setPath(obj: Record<string, unknown>, path: (string | number)[], value: unknown): Record<string, unknown> {
  if (path.length === 0) return obj;
  const result = { ...obj };
  const [head, ...rest] = path;
  if (rest.length === 0) {
    result[String(head)] = value;
  } else {
    const child = (result[String(head)] as Record<string, unknown>) ?? {};
    result[String(head)] = setPath(child, rest, value);
  }
  return result;
}

function deletePath(obj: Record<string, unknown>, path: (string | number)[]): Record<string, unknown> {
  if (path.length === 0) return obj;
  const result = { ...obj };
  const [head, ...rest] = path;
  if (rest.length === 0) {
    delete result[String(head)];
  } else {
    const child = (result[String(head)] as Record<string, unknown>) ?? {};
    result[String(head)] = deletePath(child, rest);
  }
  return result;
}

export function applyPatch<T extends Record<string, unknown>>(obj: T, changes: Change[]): T {
  let result: Record<string, unknown> = { ...obj };
  for (const change of changes) {
    switch (change.type) {
      case 'add':
      case 'update':
        result = setPath(result, change.path, change.type === 'add' ? change.value : change.newValue);
        break;
      case 'remove':
        result = deletePath(result, change.path);
        break;
    }
  }
  return result as T;
}

export function revertPatch<T extends Record<string, unknown>>(obj: T, changes: Change[]): T {
  let result: Record<string, unknown> = { ...obj };
  for (const change of [...changes].reverse()) {
    switch (change.type) {
      case 'add':
        result = deletePath(result, change.path);
        break;
      case 'remove':
        result = setPath(result, change.path, change.oldValue);
        break;
      case 'update':
        result = setPath(result, change.path, change.oldValue);
        break;
    }
  }
  return result as T;
}

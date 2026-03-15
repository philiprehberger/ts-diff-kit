function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function hasChanges(oldVal: unknown, newVal: unknown): boolean {
  if (oldVal === newVal) return false;
  if (!isObject(oldVal) || !isObject(newVal)) return true;

  const allKeys = new Set([...Object.keys(oldVal), ...Object.keys(newVal)]);
  for (const key of allKeys) {
    if (!(key in oldVal) || !(key in newVal)) return true;
    if (hasChanges(oldVal[key], newVal[key])) return true;
  }
  return false;
}

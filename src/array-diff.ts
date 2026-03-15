import type { Change } from './types';
import { diff as diffObj } from './diff';

interface ArrayDiffOptions {
  key: string;
}

export function diffArrays(
  oldArr: Record<string, unknown>[],
  newArr: Record<string, unknown>[],
  options: ArrayDiffOptions,
): Change[] {
  const { key } = options;
  const changes: Change[] = [];
  const oldMap = new Map(oldArr.map((item, i) => [item[key], { item, index: i }]));
  const newMap = new Map(newArr.map((item, i) => [item[key], { item, index: i }]));

  for (const [id, { item, index }] of oldMap) {
    if (!newMap.has(id)) {
      changes.push({ type: 'remove', path: [index], oldValue: item });
    }
  }

  for (const [id, { item, index }] of newMap) {
    if (!oldMap.has(id)) {
      changes.push({ type: 'add', path: [index], value: item });
    } else {
      const oldItem = oldMap.get(id)!.item;
      const itemChanges = diffObj(oldItem, item);
      for (const c of itemChanges) {
        changes.push({ ...c, path: [index, ...c.path] });
      }
    }
  }

  return changes;
}

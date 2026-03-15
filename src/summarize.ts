import type { Change } from './types';

export function summarize(changes: Change[]): string {
  const parts: string[] = [];
  for (const change of changes) {
    const field = change.path[change.path.length - 1] ?? 'root';
    switch (change.type) {
      case 'add': parts.push(`Added ${field}`); break;
      case 'remove': parts.push(`Removed ${field}`); break;
      case 'update': parts.push(`Updated ${field}`); break;
    }
  }
  return parts.join(', ');
}

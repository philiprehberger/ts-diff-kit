export type Path = (string | number)[];

export interface AddChange {
  type: 'add';
  path: Path;
  value: unknown;
}

export interface RemoveChange {
  type: 'remove';
  path: Path;
  oldValue: unknown;
}

export interface UpdateChange {
  type: 'update';
  path: Path;
  oldValue: unknown;
  newValue: unknown;
}

export type Change = AddChange | RemoveChange | UpdateChange;

export interface DiffOptions {
  maxDepth?: number;
  arrayKey?: string;
}

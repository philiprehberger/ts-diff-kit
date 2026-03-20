import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const mod = await import('../../dist/index.js');

describe('diff-kit', () => {
  it('should export diff', () => {
    assert.ok(mod.diff);
  });

  it('should export applyPatch', () => {
    assert.ok(mod.applyPatch);
  });

  it('should export revertPatch', () => {
    assert.ok(mod.revertPatch);
  });

  it('should export hasChanges', () => {
    assert.ok(mod.hasChanges);
  });

  it('should export summarize', () => {
    assert.ok(mod.summarize);
  });

  it('should export diffArrays', () => {
    assert.ok(mod.diffArrays);
  });
});

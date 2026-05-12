import { describe, expect, it } from 'vitest';
import { cleanupPresets, getDefaultCleanupPreset } from './controlPresets';

describe('cleanupPresets', () => {
  it('offers beginner-friendly presets with numeric slider values', () => {
    expect(cleanupPresets).toHaveLength(3);
    expect(cleanupPresets.map((preset) => preset.label)).toEqual([
      'Clean flat color',
      'Balanced',
      'Messy JPG edge'
    ]);

    for (const preset of cleanupPresets) {
      expect(preset.values.tolerance).toBeGreaterThanOrEqual(0);
      expect(preset.values.tolerance).toBeLessThanOrEqual(100);
      expect(preset.values.edgeSoftness).toBeGreaterThanOrEqual(0);
      expect(preset.values.edgeSoftness).toBeLessThanOrEqual(100);
      expect(preset.values.haloCleanup).toBeGreaterThanOrEqual(0);
      expect(preset.values.haloCleanup).toBeLessThanOrEqual(100);
    }
  });

  it('uses Balanced as the default preset', () => {
    expect(getDefaultCleanupPreset().label).toBe('Balanced');
    expect(getDefaultCleanupPreset().values).toEqual({
      tolerance: 18,
      edgeSoftness: 36,
      haloCleanup: 42
    });
  });
});

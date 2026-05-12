export type CleanupPreset = {
  id: 'flat' | 'balanced' | 'jpg';
  label: string;
  helper: string;
  values: {
    tolerance: number;
    edgeSoftness: number;
    haloCleanup: number;
  };
};

export const cleanupPresets: CleanupPreset[] = [
  {
    id: 'flat',
    label: 'Clean flat color',
    helper: 'For crisp PNG logos and solid backgrounds.',
    values: {
      tolerance: 8,
      edgeSoftness: 18,
      haloCleanup: 20
    }
  },
  {
    id: 'balanced',
    label: 'Balanced',
    helper: 'A safe starting point for most images.',
    values: {
      tolerance: 18,
      edgeSoftness: 36,
      haloCleanup: 42
    }
  },
  {
    id: 'jpg',
    label: 'Messy JPG edge',
    helper: 'For fuzzy edges, compression marks, and color halos.',
    values: {
      tolerance: 32,
      edgeSoftness: 58,
      haloCleanup: 70
    }
  }
];

export function getDefaultCleanupPreset(): CleanupPreset {
  return cleanupPresets.find((preset) => preset.id === 'balanced') ?? cleanupPresets[0];
}

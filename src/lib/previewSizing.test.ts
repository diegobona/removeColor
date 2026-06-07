import { describe, expect, it } from 'vitest';
import { getContainedPreviewSize } from './previewSizing';

describe('getContainedPreviewSize', () => {
  it('fits a wide image inside the preview bounds without cropping its height', () => {
    expect(getContainedPreviewSize({ width: 1938, height: 1280 }, { width: 1430, height: 804 })).toEqual({
      width: 1217,
      height: 804
    });
  });

  it('fits a tall image inside the preview bounds without cropping its width', () => {
    expect(getContainedPreviewSize({ width: 900, height: 1600 }, { width: 620, height: 465 })).toEqual({
      width: 262,
      height: 465
    });
  });

  it('returns zero dimensions when an image or container dimension is missing', () => {
    expect(getContainedPreviewSize({ width: 0, height: 1280 }, { width: 1430, height: 804 })).toEqual({
      width: 0,
      height: 0
    });
  });
});

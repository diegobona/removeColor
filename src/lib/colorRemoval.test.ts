import { describe, expect, it } from 'vitest';
import { parseHexColor, removeColorFromPixels, rgbToHex } from './colorRemoval';

describe('parseHexColor', () => {
  it('parses 6-digit hex colors with or without a hash', () => {
    expect(parseHexColor('#1a2b3c')).toEqual({ r: 26, g: 43, b: 60 });
    expect(parseHexColor('ffffff')).toEqual({ r: 255, g: 255, b: 255 });
  });

  it('rejects invalid hex colors', () => {
    expect(() => parseHexColor('zzzzzz')).toThrow('Invalid hex color');
    expect(() => parseHexColor('#12345')).toThrow('Invalid hex color');
  });
});

describe('rgbToHex', () => {
  it('formats RGB channels as lowercase hex', () => {
    expect(rgbToHex({ r: 0, g: 128, b: 255 })).toBe('#0080ff');
  });
});

describe('removeColorFromPixels', () => {
  it('makes exact target-color pixels transparent and preserves other pixels', () => {
    const source = new Uint8ClampedArray([
      255, 255, 255, 255,
      10, 20, 30, 255
    ]);

    const result = removeColorFromPixels(source, 2, 1, {
      target: { r: 255, g: 255, b: 255 },
      tolerance: 0,
      edgeSoftness: 0,
      haloCleanup: 0
    });

    expect([...result]).toEqual([
      255, 255, 255, 0,
      10, 20, 30, 255
    ]);
  });

  it('uses tolerance to remove near target colors', () => {
    const source = new Uint8ClampedArray([
      250, 250, 250, 255,
      220, 220, 220, 255
    ]);

    const lowTolerance = removeColorFromPixels(source, 2, 1, {
      target: { r: 255, g: 255, b: 255 },
      tolerance: 1,
      edgeSoftness: 0,
      haloCleanup: 0
    });
    const highTolerance = removeColorFromPixels(source, 2, 1, {
      target: { r: 255, g: 255, b: 255 },
      tolerance: 15,
      edgeSoftness: 0,
      haloCleanup: 0
    });

    expect(lowTolerance[3]).toBe(255);
    expect(highTolerance[3]).toBe(0);
    expect(highTolerance[7]).toBe(255);
  });

  it('creates partial alpha in the softness band', () => {
    const source = new Uint8ClampedArray([
      246, 246, 246, 255
    ]);

    const result = removeColorFromPixels(source, 1, 1, {
      target: { r: 255, g: 255, b: 255 },
      tolerance: 2,
      edgeSoftness: 50,
      haloCleanup: 0
    });

    expect(result[3]).toBeGreaterThan(0);
    expect(result[3]).toBeLessThan(255);
  });

  it('keeps existing transparent pixels transparent', () => {
    const source = new Uint8ClampedArray([
      255, 255, 255, 0
    ]);

    const result = removeColorFromPixels(source, 1, 1, {
      target: { r: 255, g: 255, b: 255 },
      tolerance: 100,
      edgeSoftness: 100,
      haloCleanup: 100
    });

    expect([...result]).toEqual([255, 255, 255, 0]);
  });
});

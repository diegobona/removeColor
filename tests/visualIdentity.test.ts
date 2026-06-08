import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('visual identity surfaces', () => {
  it('adds a memorable hero brand mark and proof row', () => {
    const homePage = readFileSync('src/pages/index.astro', 'utf8');

    expect(homePage).toContain('brand-mark');
    expect(homePage).toContain('hero__eyebrow-row');
    expect(homePage).toContain('hero__badges');
    expect(homePage).toContain('hero__proof');
    expect(homePage).not.toContain('hero__intro');
  });

  it('adds a visual empty state to the upload tool', () => {
    const colorTool = readFileSync('src/components/ColorTool.astro', 'utf8');

    expect(colorTool).toContain('compare-grid');
    expect(colorTool).toContain('Input image');
    expect(colorTool).toContain('Output image');
    expect(colorTool).toContain('compare-panel__hint');
    expect(colorTool).toContain('compare-panel__download');
    expect(colorTool).toContain('compare-panel__clear');
    expect(colorTool).toContain('before-empty__button');
    expect(colorTool).toContain('loadImageButton');
    expect(colorTool).toContain('clearImageButton');
    expect(colorTool).toContain('Or drop an image here');
    expect(colorTool).toContain('Or paste it here (Ctrl+V)');
    expect(colorTool).toContain('removecolor:load-example');
    expect(colorTool).not.toContain('Try sample');
    expect(colorTool).not.toContain('Choose an image to start.');
  });

  it('uses Try buttons to load compact example images', () => {
    const compactExampleStrip = readFileSync('src/components/CompactExampleStrip.astro', 'utf8');

    expect(compactExampleStrip).toContain('Try it');
    expect(compactExampleStrip).toContain('compact-example__cta');
    expect(compactExampleStrip).toContain('compact-example__image--solid');
    expect(compactExampleStrip).toContain('data-example-trigger');
    expect(compactExampleStrip).toContain('removecolor:load-example');
  });
});

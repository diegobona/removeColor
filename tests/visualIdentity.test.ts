import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('visual identity surfaces', () => {
  it('adds a memorable hero brand mark and proof row', () => {
    const homePage = readFileSync('src/pages/index.astro', 'utf8');

    expect(homePage).toContain('brand-mark');
    expect(homePage).toContain('hero__proof');
  });

  it('adds a visual empty state to the upload tool', () => {
    const colorTool = readFileSync('src/components/ColorTool.astro', 'utf8');

    expect(colorTool).toContain('preview-empty__visual');
    expect(colorTool).toContain('preview-empty__chip');
    expect(colorTool).toContain('removecolor:load-example');
  });

  it('uses Try buttons to load compact example images', () => {
    const compactExampleStrip = readFileSync('src/components/CompactExampleStrip.astro', 'utf8');

    expect(compactExampleStrip).toContain('Try');
    expect(compactExampleStrip).toContain('compact-example__cta');
    expect(compactExampleStrip).toContain('data-example-trigger');
    expect(compactExampleStrip).toContain('removecolor:load-example');
  });
});

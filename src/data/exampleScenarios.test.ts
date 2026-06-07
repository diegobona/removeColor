import { describe, expect, it } from 'vitest';
import { compactExampleScenarios, detailExampleScenarios, exampleScenarios } from './exampleScenarios';

describe('exampleScenarios', () => {
  it('contains multiple before and after removal scenarios', () => {
    expect(exampleScenarios.length).toBeGreaterThanOrEqual(4);

    for (const scenario of exampleScenarios) {
      expect(scenario.title).toBeTruthy();
      expect(scenario.removeLabel).toMatch(/^Remove /);
      expect(scenario.before.background).toBeTruthy();
      expect(scenario.after.background).toBe('transparent');
      expect(scenario.subject?.kind ?? scenario.media?.beforeSrc).toBeTruthy();
    }
  });

  it('selects four compact scenarios for the hero strip', () => {
    expect(compactExampleScenarios).toHaveLength(4);
    expect(compactExampleScenarios.map((scenario) => scenario.id)).toEqual([
      'white-logo',
      'green-screen',
      'black-icon',
      'signature-scan'
    ]);

    expect(compactExampleScenarios.map((scenario) => scenario.media?.beforeSrc)).toEqual([
      '/examples/1.png',
      '/examples/2.png',
      '/examples/3.png',
      '/examples/4.png'
    ]);

    expect(compactExampleScenarios.map((scenario) => scenario.media?.expectedAfterSrc)).toEqual([
      '/examples/1-after.png',
      '/examples/2-after.png',
      '/examples/3-after.png',
      '/examples/4-after.png'
    ]);
  });

  it('keeps detail examples from duplicating compact strip scenarios', () => {
    const compactIds = new Set(compactExampleScenarios.map((scenario) => scenario.id));

    expect(detailExampleScenarios.some((scenario) => compactIds.has(scenario.id))).toBe(false);
  });

  it('uses five real before-image scenarios for the detailed gallery', () => {
    expect(detailExampleScenarios).toHaveLength(5);
    expect(detailExampleScenarios.map((scenario) => scenario.id)).toEqual([
      'white-product-earbuds',
      'pink-backdrop-sneakers',
      'black-background-badge',
      'green-accent-sticker-sheet',
      'beige-paper-signature'
    ]);

    for (const scenario of detailExampleScenarios) {
      expect(scenario.media?.beforeSrc).toMatch(/^\/examples\/generated\/.+\.png$/);
      expect(scenario.media?.expectedAfterSrc).toMatch(/^\/examples\/generated\/.+-after\.png$/);
      expect(scenario.media?.alt).toBeTruthy();
      expect(scenario.targetColor).toMatch(/^#/);
    }
  });
});

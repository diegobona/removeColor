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
      expect(scenario.subject.kind).toBeTruthy();
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
  });

  it('keeps detail examples from duplicating compact strip scenarios', () => {
    const compactIds = new Set(compactExampleScenarios.map((scenario) => scenario.id));

    expect(detailExampleScenarios.some((scenario) => compactIds.has(scenario.id))).toBe(false);
  });
});

import { describe, expect, it } from 'vitest';
import { exampleScenarios } from './exampleScenarios';

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
});

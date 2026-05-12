export type ExampleScenario = {
  id: string;
  title: string;
  removeLabel: string;
  before: {
    label: string;
    background: string;
  };
  after: {
    label: string;
    background: 'transparent';
  };
  subject: {
    kind: 'logo' | 'product' | 'icon' | 'signature';
    primary: string;
    accent: string;
  };
};

export const exampleScenarios: ExampleScenario[] = [
  {
    id: 'white-logo',
    title: 'Logo on white',
    removeLabel: 'Remove white',
    before: {
      label: 'Before',
      background: '#ffffff'
    },
    after: {
      label: 'After',
      background: 'transparent'
    },
    subject: {
      kind: 'logo',
      primary: '#111827',
      accent: '#14b8a6'
    }
  },
  {
    id: 'green-screen',
    title: 'Green screen color',
    removeLabel: 'Remove green',
    before: {
      label: 'Before',
      background: '#22c55e'
    },
    after: {
      label: 'After',
      background: 'transparent'
    },
    subject: {
      kind: 'product',
      primary: '#2563eb',
      accent: '#f97316'
    }
  },
  {
    id: 'black-icon',
    title: 'Icon on black',
    removeLabel: 'Remove black',
    before: {
      label: 'Before',
      background: '#111827'
    },
    after: {
      label: 'After',
      background: 'transparent'
    },
    subject: {
      kind: 'icon',
      primary: '#ffffff',
      accent: '#60a5fa'
    }
  },
  {
    id: 'signature-scan',
    title: 'Scanned signature',
    removeLabel: 'Remove paper color',
    before: {
      label: 'Before',
      background: '#f8f2e8'
    },
    after: {
      label: 'After',
      background: 'transparent'
    },
    subject: {
      kind: 'signature',
      primary: '#172554',
      accent: '#0f172a'
    }
  }
];

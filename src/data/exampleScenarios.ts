export type ExampleScenario = {
  id: string;
  title: string;
  removeLabel: string;
  targetColor?: string;
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
  media?: {
    beforeSrc: string;
    expectedAfterSrc: string;
    alt: string;
  };
};

export const exampleScenarios: ExampleScenario[] = [
  {
    id: 'white-logo',
    title: 'Pink backdrop sneakers',
    removeLabel: 'Remove pink',
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
    },
    media: {
      beforeSrc: '/examples/1.png',
      expectedAfterSrc: '/examples/1-after.png',
      alt: 'Cream sneakers photographed on a pink backdrop'
    }
  },
  {
    id: 'green-screen',
    title: 'Sky silhouette photo',
    removeLabel: 'Remove sky',
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
    },
    media: {
      beforeSrc: '/examples/2.png',
      expectedAfterSrc: '/examples/2-after.png',
      alt: 'Person silhouetted against a colorful sunset sky while juggling a soccer ball'
    }
  },
  {
    id: 'black-icon',
    title: 'Sticker sheet artwork',
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
    },
    media: {
      beforeSrc: '/examples/3.png',
      expectedAfterSrc: '/examples/3-after.png',
      alt: 'Sticker sheet with colorful geometric shapes on a light background'
    }
  },
  {
    id: 'signature-scan',
    title: 'Signature scan',
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
    },
    media: {
      beforeSrc: '/examples/4.png',
      expectedAfterSrc: '/examples/4-after.png',
      alt: 'Ink signature and doodles on warm paper'
    }
  },
  {
    id: 'white-product-earbuds',
    title: 'White product photo',
    removeLabel: 'Remove white',
    targetColor: '#f8f8f8',
    before: {
      label: 'Before',
      background: '#ffffff'
    },
    after: {
      label: 'After',
      background: 'transparent'
    },
    subject: {
      kind: 'product',
      primary: '#f8fafc',
      accent: '#94a3b8'
    },
    media: {
      beforeSrc: '/examples/generated/white-product-earbuds.png',
      expectedAfterSrc: '/examples/generated/white-product-earbuds-after.png',
      alt: 'Wireless earbuds in a white charging case on a white studio background'
    }
  },
  {
    id: 'pink-backdrop-sneakers',
    title: 'Colored studio backdrop',
    removeLabel: 'Remove pink',
    targetColor: '#ee8fa6',
    before: {
      label: 'Before',
      background: '#ee8fa6'
    },
    after: {
      label: 'After',
      background: 'transparent'
    },
    subject: {
      kind: 'product',
      primary: '#fef3c7',
      accent: '#ee8fa6'
    },
    media: {
      beforeSrc: '/examples/generated/pink-backdrop-sneakers.png',
      expectedAfterSrc: '/examples/generated/pink-backdrop-sneakers-after.png',
      alt: 'Cream canvas sneakers photographed on a pastel pink studio background'
    }
  },
  {
    id: 'black-background-badge',
    title: 'Dark icon asset',
    removeLabel: 'Remove black',
    targetColor: '#000000',
    before: {
      label: 'Before',
      background: '#000000'
    },
    after: {
      label: 'After',
      background: 'transparent'
    },
    subject: {
      kind: 'icon',
      primary: '#f59e0b',
      accent: '#2563eb'
    },
    media: {
      beforeSrc: '/examples/generated/black-background-badge.png',
      expectedAfterSrc: '/examples/generated/black-background-badge-after.png',
      alt: 'Gold and blue geometric badge icon on a black background'
    }
  },
  {
    id: 'green-accent-sticker-sheet',
    title: 'Selected color in artwork',
    removeLabel: 'Remove green',
    targetColor: '#22c55e',
    before: {
      label: 'Before',
      background: '#f8f2e8'
    },
    after: {
      label: 'After',
      background: 'transparent'
    },
    subject: {
      kind: 'icon',
      primary: '#22c55e',
      accent: '#2563eb'
    },
    media: {
      beforeSrc: '/examples/generated/green-accent-sticker-sheet.png',
      expectedAfterSrc: '/examples/generated/green-accent-sticker-sheet-after.png',
      alt: 'Colorful sticker sheet with repeated green shapes selected for removal'
    }
  },
  {
    id: 'beige-paper-signature',
    title: 'Scanned paper texture',
    removeLabel: 'Remove paper color',
    targetColor: '#eadfca',
    before: {
      label: 'Before',
      background: '#eadfca'
    },
    after: {
      label: 'After',
      background: 'transparent'
    },
    subject: {
      kind: 'signature',
      primary: '#172554',
      accent: '#0f172a'
    },
    media: {
      beforeSrc: '/examples/generated/beige-paper-signature.png',
      expectedAfterSrc: '/examples/generated/beige-paper-signature-after.png',
      alt: 'Black ink signature-like doodles on warm beige paper'
    }
  }
];

const compactExampleScenarioIds = ['white-logo', 'green-screen', 'black-icon', 'signature-scan'];

export const compactExampleScenarios = exampleScenarios.filter((scenario) =>
  compactExampleScenarioIds.includes(scenario.id)
);

export const detailExampleScenarios = exampleScenarios.filter(
  (scenario) => !compactExampleScenarioIds.includes(scenario.id)
);

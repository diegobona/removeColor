export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  focus: string;
  examples: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const homePage: Omit<SeoPage, 'slug'> = {
  title: 'Remove Color From Image Online - Free Color Remover',
  description:
    'Remove a specific color from an image online. Pick a color, adjust tolerance and edge cleanup, then download a transparent PNG. Free, private, and browser-based.',
  h1: 'Remove Color From Image',
  intro:
    'Select any color in your image, remove it precisely, and export a transparent PNG without uploading your file.',
  focus: 'Best for logos, signatures, icons, product shots, and images with solid or near-solid color backgrounds.',
  examples: ['White logo backgrounds', 'Black icon backdrops', 'Green screen-style images', 'Scanned signatures'],
  faqs: [
    {
      question: 'Does RemoveColor upload my image?',
      answer:
        'No. The first version processes images locally in your browser, so your file does not need to leave your device.'
    },
    {
      question: 'What file formats are supported?',
      answer:
        'You can upload PNG, JPG, JPEG, and WebP images. Results are exported as transparent PNG files.'
    },
    {
      question: 'How do I avoid rough edges or white halos?',
      answer:
        'Use the tolerance, edge softness, and halo cleanup controls. Lower tolerance protects similar subject colors, while softness and halo cleanup improve anti-aliased edges.'
    }
  ]
};

export const seoPages: SeoPage[] = [
  {
    slug: 'remove-a-color-from-an-image',
    title: 'Remove a Color From an Image Online',
    description:
      'Remove one selected color from an image and turn it transparent. Pick the color, tune tolerance, clean edges, and download a PNG.',
    h1: 'Remove a Color From an Image',
    intro:
      'Use this tool when you want to remove one exact color or a close color range from an image.',
    focus: 'Choose the target color manually instead of relying on an automatic background remover.',
    examples: ['One-color backgrounds', 'Brand marks', 'Flat icons', 'Simple product photos'],
    faqs: [
      {
        question: 'Can I remove only one color?',
        answer:
          'Yes. Click a color in the image or enter a HEX value, then adjust tolerance to decide how many similar colors are removed.'
      },
      {
        question: 'Will it remove similar colors inside my subject?',
        answer:
          'High tolerance can remove similar colors anywhere in the image. Use a lower tolerance when the subject contains colors close to the selected background.'
      }
    ]
  },
  {
    slug: 'color-remover-from-image',
    title: 'Color Remover From Image - Free Online Tool',
    description:
      'Use a free color remover from image files. Remove selected colors locally in your browser and save the result as a transparent PNG.',
    h1: 'Color Remover From Image',
    intro:
      'A focused image color remover for turning selected colors transparent while keeping the rest of the picture intact.',
    focus: 'Designed for precise color selection, live preview, and cleaner edges.',
    examples: ['Logos', 'Badges', 'Icons', 'Flat illustrations'],
    faqs: [
      {
        question: 'Is this an AI background remover?',
        answer:
          'No. It is a specific color remover. You choose the color to remove, which makes it better for solid-color backgrounds and design assets.'
      },
      {
        question: 'Can I export with transparency?',
        answer:
          'Yes. The download is a PNG with transparency for removed pixels.'
      }
    ]
  },
  {
    slug: 'remove-specific-color-from-image',
    title: 'Remove Specific Color From Image Online',
    description:
      'Remove a specific color from an image with a picker, tolerance slider, edge smoothing, and transparent PNG export.',
    h1: 'Remove Specific Color From Image',
    intro:
      'Pick a precise target color from your image, then remove that color range without guessing the subject.',
    focus: 'Useful when a normal background remover chooses the wrong area or removes too much detail.',
    examples: ['Exact HEX background colors', 'Near-white JPEG backgrounds', 'Color-keyed graphics', 'Watermark-free exports'],
    faqs: [
      {
        question: 'Can I type the color manually?',
        answer:
          'Yes. Enter a HEX color such as #ffffff or click directly on the image to sample a pixel.'
      },
      {
        question: 'What does tolerance do?',
        answer:
          'Tolerance controls how far from the selected color a pixel can be and still become transparent.'
      }
    ]
  },
  {
    slug: 'remove-color-from-png',
    title: 'Remove Color From PNG Online',
    description:
      'Remove a color from a PNG image and preserve transparency. Select a color, clean the edges, and export a transparent PNG.',
    h1: 'Remove Color From PNG',
    intro:
      'Remove unwanted colors from PNG images while keeping existing transparent areas intact.',
    focus: 'Best for PNG logos, icons, stickers, and design assets.',
    examples: ['PNG logos with white boxes', 'Icons on black backgrounds', 'Transparent stickers', 'Flat UI assets'],
    faqs: [
      {
        question: 'Will existing transparency be preserved?',
        answer:
          'Yes. Transparent pixels in the original PNG remain transparent in the output.'
      },
      {
        question: 'Can I remove a background color from PNG?',
        answer:
          'Yes. Select the background color and adjust tolerance until the unwanted area becomes transparent.'
      }
    ]
  },
  {
    slug: 'remove-white-color-from-image',
    title: 'Remove White Color From Image Online',
    description:
      'Remove white from an image online. Great for white logo backgrounds, signatures, scanned marks, and transparent PNG exports.',
    h1: 'Remove White Color From Image',
    intro:
      'Click a white or near-white area, tune tolerance, and clean up pale edges before downloading a transparent PNG.',
    focus: 'Especially useful for logos, signatures, and scans on white paper.',
    examples: ['White logo boxes', 'Signature scans', 'White product backgrounds', 'JPEG off-white edges'],
    faqs: [
      {
        question: 'Why does white remain around the edges?',
        answer:
          'Anti-aliased pixels are often partly white. Increase edge softness or halo cleanup to reduce those light fringes.'
      },
      {
        question: 'Can I remove off-white colors?',
        answer:
          'Yes. Pick the off-white area directly or increase tolerance until similar shades are included.'
      }
    ]
  },
  {
    slug: 'remove-black-color-from-image',
    title: 'Remove Black Color From Image Online',
    description:
      'Remove black from an image and make it transparent. Pick black or near-black pixels, adjust tolerance, and download PNG.',
    h1: 'Remove Black Color From Image',
    intro:
      'Turn black or near-black areas transparent while keeping the rest of the image visible.',
    focus: 'Useful for icons, dark logo backgrounds, and simple black matte cleanup.',
    examples: ['Black icon backgrounds', 'Dark logo boxes', 'Line art cleanup', 'Simple stickers'],
    faqs: [
      {
        question: 'Will it remove black details too?',
        answer:
          'It can if the details match your selected color. Keep tolerance low when the subject contains black areas you want to preserve.'
      },
      {
        question: 'Can I preview on a light background?',
        answer:
          'Yes. Switch the preview background to white to inspect black-edge transparency clearly.'
      }
    ]
  },
  {
    slug: 'remove-background-color-from-image',
    title: 'Remove Background Color From Image Online',
    description:
      'Remove a background color from an image online. Best for solid or near-solid backgrounds, with local processing and transparent PNG output.',
    h1: 'Remove Background Color From Image',
    intro:
      'Remove a selected background color instead of asking AI to guess the subject boundary.',
    focus: 'Best when the background is a flat color, close color range, green screen, or simple studio backdrop.',
    examples: ['Solid white backgrounds', 'Green screens', 'Blue product backgrounds', 'Flat-color graphics'],
    faqs: [
      {
        question: 'Is this the same as a background remover?',
        answer:
          'It overlaps, but this tool removes a color you choose. It works best for solid-color backgrounds rather than complex scenes.'
      },
      {
        question: 'What if the background has shadows?',
        answer:
          'Increase tolerance and edge softness carefully. For heavy shadows or complex photos, a future AI background tool may work better.'
      }
    ]
  }
];

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages.find((page) => page.slug === slug);
}

export type RgbColor = {
  r: number;
  g: number;
  b: number;
};

export type RemoveColorOptions = {
  target: RgbColor;
  tolerance: number;
  edgeSoftness: number;
  haloCleanup: number;
};

const MAX_RGB_DISTANCE = Math.sqrt(255 ** 2 * 3);

export function parseHexColor(hex: string): RgbColor {
  const normalized = hex.trim().replace(/^#/, '').toLowerCase();

  if (!/^[0-9a-f]{6}$/.test(normalized)) {
    throw new Error('Invalid hex color');
  }

  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16)
  };
}

export function rgbToHex(color: RgbColor): string {
  return `#${toHexChannel(color.r)}${toHexChannel(color.g)}${toHexChannel(color.b)}`;
}

export function removeColorFromPixels(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  options: RemoveColorOptions
): Uint8ClampedArray {
  if (data.length !== width * height * 4) {
    throw new Error('Pixel data length does not match image dimensions');
  }

  const output = new Uint8ClampedArray(data);
  const hardCutoff = toleranceToDistance(options.tolerance);
  const softRange = softnessToDistance(options.edgeSoftness);
  const cleanupStrength = clampPercent(options.haloCleanup) / 100;

  for (let index = 0; index < output.length; index += 4) {
    const originalAlpha = data[index + 3];

    if (originalAlpha === 0) {
      continue;
    }

    const distance = colorDistance(
      { r: data[index], g: data[index + 1], b: data[index + 2] },
      options.target
    );
    const keepRatio = getKeepRatio(distance, hardCutoff, softRange);
    const nextAlpha = Math.round(originalAlpha * keepRatio);

    output[index + 3] = nextAlpha;

    if (cleanupStrength > 0 && nextAlpha > 0 && nextAlpha < originalAlpha) {
      const cleaned = cleanHaloColor(
        { r: output[index], g: output[index + 1], b: output[index + 2] },
        options.target,
        keepRatio,
        cleanupStrength
      );
      output[index] = cleaned.r;
      output[index + 1] = cleaned.g;
      output[index + 2] = cleaned.b;
    }
  }

  return output;
}

function toHexChannel(value: number): string {
  return clampChannel(value).toString(16).padStart(2, '0');
}

function clampChannel(value: number): number {
  return Math.min(255, Math.max(0, Math.round(value)));
}

function clampPercent(value: number): number {
  return Math.min(100, Math.max(0, Number.isFinite(value) ? value : 0));
}

function colorDistance(left: RgbColor, right: RgbColor): number {
  return Math.sqrt(
    (left.r - right.r) ** 2 +
    (left.g - right.g) ** 2 +
    (left.b - right.b) ** 2
  );
}

function toleranceToDistance(tolerance: number): number {
  const normalized = clampPercent(tolerance) / 100;
  return MAX_RGB_DISTANCE * normalized ** 1.5;
}

function softnessToDistance(edgeSoftness: number): number {
  return MAX_RGB_DISTANCE * 0.22 * (clampPercent(edgeSoftness) / 100);
}

function getKeepRatio(distance: number, hardCutoff: number, softRange: number): number {
  if (distance <= hardCutoff) {
    return 0;
  }

  if (softRange > 0 && distance <= hardCutoff + softRange) {
    return (distance - hardCutoff) / softRange;
  }

  return 1;
}

function cleanHaloColor(
  color: RgbColor,
  target: RgbColor,
  keepRatio: number,
  strength: number
): RgbColor {
  const safeRatio = Math.max(0.01, keepRatio);

  return {
    r: blendChannel(color.r, target.r, safeRatio, strength),
    g: blendChannel(color.g, target.g, safeRatio, strength),
    b: blendChannel(color.b, target.b, safeRatio, strength)
  };
}

function blendChannel(channel: number, targetChannel: number, keepRatio: number, strength: number): number {
  const estimatedForeground = (channel - targetChannel * (1 - keepRatio)) / keepRatio;
  return clampChannel(channel + (estimatedForeground - channel) * strength);
}

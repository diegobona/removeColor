export type PreviewDimensions = {
  width: number;
  height: number;
};

export function getContainedPreviewSize(
  image: PreviewDimensions,
  container: PreviewDimensions
): PreviewDimensions {
  if (image.width <= 0 || image.height <= 0 || container.width <= 0 || container.height <= 0) {
    return { width: 0, height: 0 };
  }

  const scale = Math.min(container.width / image.width, container.height / image.height);

  return {
    width: Math.round(image.width * scale),
    height: Math.round(image.height * scale)
  };
}

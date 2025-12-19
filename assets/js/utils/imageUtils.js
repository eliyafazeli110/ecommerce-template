export function getMainImage(images) {
  return images.find((img) => img.is_primary) || images[0]
}

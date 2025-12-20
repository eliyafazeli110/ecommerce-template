import { getProducts } from "../api/productsApi.js"

export async function getProductById(id) {
  const products = await getProducts()
  return products.find((p) => String(p.id) === String(id))
}

export function getMainImage(images) {
  return images.find((img) => img.is_primary) || images[0]
}

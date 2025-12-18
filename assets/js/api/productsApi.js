export async function getProducts() {
  const res = await fetch("http://localhost:5500/assets/data/db.json")
  const data = await res.json()
  return data
}

export async function getProductById(id) {
  const products = await getProducts()
  return products.find((p) => String(p.id) === String(id))
}

export function getMainImage(images) {
  return images.find((img) => img.is_primary) || images[0]
}

export async function getProducts() {
  const res = await fetch("http://localhost:5500/assets/data/db.json")
  if (!res.ok) throw new Error("Failed to fetch products")
  return await res.json()
}

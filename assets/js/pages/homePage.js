import { getProducts } from "../api/productsApi.js"
import { createProductCard } from "../ui/ProductSection/createProductCard.js"
import { renderProductSection } from "../ui/ProductSection/renderProductsSection.js"

export default async function initHomePage() {
  try {
    const products = await getProducts()
    renderProductSection(products)
  } catch (error) {
    console.error("Failed to load products:", error)
  }
}

function renderProducts(containerSelector, products) {
  const container = document.querySelector(containerSelector)
  if (!container) return

  container.innerHTML = products.map(createProductCard).join("")
}

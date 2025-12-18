import { getProducts } from "../api/productsApi.js"
import { createProductCard } from "../components/productCard.js"
import { renderProductSections } from "../ui/renderProductsSection.js"

export default async function initHomePage() {
  try {
    const products = await getProducts()
    renderProductSections(products)
  } catch (error) {
    console.error("Failed to load products:", error)
  }
}

function renderProducts(containerSelector, products) {
  const container = document.querySelector(containerSelector)
  if (!container) return

  container.innerHTML = products.map(createProductCard).join("")
}

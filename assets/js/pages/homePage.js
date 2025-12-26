import { getProducts } from "../api/productsApi.js"
import { initTestimonials } from "../features/initTestimonials.js"
import { renderProductSection } from "../ui/ProductSection/renderProductsSection.js"

export default async function initHomePage() {
  try {
    const products = await getProducts()
    renderProductSection(products)
    initTestimonials(".testimonials__grid .swiper-wrapper", false, false, "brand")
  } catch (error) {
    console.error("Failed to load products:", error)
  }
}

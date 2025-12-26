import { renderTestimonialsList } from "../ui/testimonials/renderTestimonialsList.js"
import { getBrandTestimonials, getProductTestimonials } from "../api/testimonialsApi.js"

export async function initTestimonials(
  containerSelector,
  showDate = false,
  showMore = true,
  type,
  productId = null
) {
  const container = document.querySelector(containerSelector)
  if (!container) return []

  try {
    let testimonials = []

    if (type === "brand") {
      testimonials = await getBrandTestimonials()
    }

    if (type === "product") {
      testimonials = await getProductTestimonials(productId)
    }

    if (testimonials.length === 0) {
      container.innerHTML = `
        <h1 class="testimonials__empty">
          There are no comments for this product yet.
        </h1>
      `
      return []
    }

    renderTestimonialsList(container, testimonials, { showDate, showMore })

    return testimonials
  } catch (error) {
    console.error("Error initializing testimonials:", error)
    return []
  }
}

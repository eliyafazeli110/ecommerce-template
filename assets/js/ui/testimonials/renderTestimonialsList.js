import { renderTestimonialCard } from "./renderTestimonialCard.js"

export function renderTestimonialsList(container, testimonials, options = {}) {
  if (!container) return

  container.innerHTML = testimonials.map((t) => renderTestimonialCard(t, options)).join("")
}

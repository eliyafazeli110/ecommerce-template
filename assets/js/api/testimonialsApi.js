export async function getTestimonials() {
  const res = await fetch("http://localhost:5500/assets/data/testimonials.json")
  if (!res.ok) throw new Error("Failed to fetch products")
  return await res.json()
}

export async function getBrandTestimonials() {
  const testimonials = await getTestimonials()
  return testimonials.filter((testimonial) => testimonial.target.type === "brand")
}

export async function getProductTestimonials(productId) {
  const testimonials = await getTestimonials()
  const numericProductId = Number(productId)

  return testimonials.filter(
    (testimonial) =>
      testimonial.target.type === "product" && testimonial.target.id === numericProductId
  )
}

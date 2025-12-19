import { createProductCard } from "./createProductCard.js"

export function renderProductSection(products) {
  const sections = document.querySelectorAll(".product-section[data-products]")

  sections.forEach((section) => {
    const type = section.dataset.products
    const limit = Number(section.dataset.limit) || 8
    const container = section.querySelector(".swiper-wrapper")

    if (!container) return

    let filteredProducts = []

    switch (type) {
      case "featured":
        filteredProducts = products.slice(0, 6)
        break

      case "new":
        filteredProducts = products.slice(7, 13 + limit)
        break

      case "sale":
        filteredProducts = products.filter((p) => p.price.old)
        break
    }

    container.innerHTML = filteredProducts.map(createProductCard).join("")
  })
}

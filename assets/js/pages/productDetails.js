import { getProductById } from "../api/productsApi.js"
import { getQueryParam } from "../utils/url.js"
import { renderProductDetails } from "../ui/renderProductDetails.js"
import { renderProductGallery } from "../ui/renderProductGallery.js"
import { initGalleryInteractions } from "../components/initGallery.js"

export async function initProductDetails() {
  const productId = getQueryParam("id")
  if (!productId) return

  const product = await getProductById(productId)

  if (!product) {
    document.body.innerHTML = "<h1>Product not found</h1>"
    return
  }

  renderProductDetails(product)
  renderProductGallery(product)
  initGalleryInteractions()
}

document.addEventListener("DOMContentLoaded", initProductDetails)

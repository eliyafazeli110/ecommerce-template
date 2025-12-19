import { getProductById } from "../api/productsApi.js"
import { getQueryParam } from "../utils/url.js"
import { renderProductDetails } from "../ui/renderProductDetails.js"
import { renderProductGallery } from "../ui/renderProductGallery.js"
import { initGalleryInteractions } from "../components/initGallery.js"
import { addToCart } from "../store/cartActions.js"

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

  const [minusBtn, plusBtn] = document.querySelectorAll(".product__counter .btn")
  const qtyEl = document.querySelector(".product__counter p")
  const addCartBtn = document.querySelector(".btn--primary")

  let selectedColor = null
  let selectedSize = null
  let quantity = 0

  document.querySelectorAll(".color").forEach((colorEl) => {
    colorEl.addEventListener("click", () => {
      selectedColor = colorEl.dataset.color

      document.querySelectorAll(".color").forEach((el) => el.classList.remove("active"))

      colorEl.classList.add("active")
    })
  })

  document.querySelectorAll(".size").forEach((sizeEl) => {
    sizeEl.addEventListener("click", () => {
      selectedSize = sizeEl.dataset.size

      document.querySelectorAll(".size").forEach((el) => el.classList.remove("active"))

      sizeEl.classList.add("active")
    })
  })

  plusBtn.addEventListener("click", () => {
    quantity++
    qtyEl.textContent = quantity
  })

  minusBtn.addEventListener("click", () => {
    if (quantity > 0) {
      quantity--
      qtyEl.textContent = quantity
    }
  })

  addCartBtn.addEventListener("click", () => {
    // if (!selectedColor || !selectedSize) {
    //   alert("Please select color and size")
    //   return
    // }

    addToCart(product, {
      quantity,
      color: selectedColor,
      size: selectedSize,
    })

    alert("Added to cart")
  })
}

document.addEventListener("DOMContentLoaded", initProductDetails)

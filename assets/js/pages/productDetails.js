import quantityController from "../ui/shared/quantityController.js"
import { getProductById } from "../services/productService.js"
import { getQueryParam } from "../utils/url.js"
import { renderProductDetails } from "../ui/productDetails/renderProductDetails.js"
import { renderProductGallery } from "../ui/productDetails/renderProductGallery.js"
import { initGalleryInteractions } from "../ui/productDetails/initGallery.js"
import { addToCart } from "../store/cartStore.js"
import { mapProductToCartItem } from "../models/productMapper.js"
import { initTestimonials } from "../features/initTestimonials.js"
import { renderLoadMoreButton } from "../ui/shared/renderLoadMoreBtn.js"

export async function initProductDetails() {
  // پیدا کردن کانتینر اصلی (برای اطمینان از اینکه در صفحه درست هستیم)
  const detailContainer = document.querySelector(".page-product-details")
  if (!detailContainer) return

  const productId = getQueryParam("id")
  if (!productId) return

  const product = await getProductById(productId)
  if (!product) {
    detailContainer.innerHTML = "<h1>Product Not Found!</h1>"
    return
  }

  // رندر کردن بخش‌های مختلف
  renderProductDetails(product)
  renderProductGallery(product)
  initGalleryInteractions()

  const container = ".testimonials__grid"
  const testimonials = await initTestimonials(container, true, true, "product", productId)
  console.log(testimonials)
  if (testimonials.length >= 1) {
    renderLoadMoreButton(document.querySelector(".testimonials__footer"))
  }

  //انتخاب المان‌های تعاملی
  const addCartBtn = document.querySelector(".btn--primary")
  const qtyEl = document.querySelector(".current-quantity")

  // متغیرهای وضعیت انتخاب کاربر
  let state = {
    color: null,
    size: null,
    quantity: 1,
  }

  setupSelection(".color", (val) => (state.color = val))
  setupSelection(".size", (val) => (state.size = val))

  quantityController({
    minusBtn: document.querySelector(".product__counter .btn-minus"),
    plusBtn: document.querySelector(".product__counter .btn-plus"),
    valueEl: qtyEl,
    initialValue: 1,
    min: 1,
    onChange: (val) => (state.quantity = val),
  })

  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
      if (!state.color || !state.size) {
        alert("Please select color and size")
        return
      }

      const cartItem = mapProductToCartItem(product, {
        quantity: state.quantity,
        color: state.color,
        size: state.size,
      })

      addToCart(cartItem)
      alert("Added to cart")
    })
  }
}

// تابع کمکی برای جلوگیری از تکرار کد انتخابگرها
function setupSelection(selector, callback) {
  const elements = document.querySelectorAll(selector)
  elements.forEach((el) => {
    el.addEventListener("click", () => {
      elements.forEach((item) => item.classList.remove("active"))
      el.classList.add("active")
      callback(el.dataset.color || el.dataset.size)
    })
  })
}

import { getCart } from "../store/cartStore.js"
import { increaseQuantity, decreaseQuantity, removeCartItem } from "../store/cartActions.js"
import { renderCartList } from "../ui/cart/renderCartList.js"
import { calculateOrderDetails } from "../utils/cartUtils.js"
import { renderOrderSummary } from "../ui/orderSummary/renderOrderSummary.js"

export function initCartPage() {
  const container = document.querySelector(".cart-list")
  const summaryContainer = document.querySelector(".order-summary")
  if (!container || !summaryContainer) return

  const render = () => {
    const cart = getCart()
    const orderData = calculateOrderDetails(cart)

    renderCartList(cart)
    renderOrderSummary(summaryContainer, orderData)
  }

  render()

  window.addEventListener("cartUpdated", render)
  window.addEventListener("storage", (e) => {
    if (e.key === "cart") render()
  })

  if (!container.dataset.listener) {
    container.addEventListener("click", (e) => {
      const cartItemEl = e.target.closest(".cart-item")
      if (!cartItemEl) return

      // compaire with item from state
      const { id, color, size } = cartItemEl.dataset
      const cart = getCart()
      const itemInStore = cart.find(
        (i) => i.id === Number(id) && i.selectedColor === color && i.selectedSize === size
      )
      if (!itemInStore) return

      if (e.target.closest(".btn-plus")) {
        increaseQuantity(itemInStore)
      }

      if (e.target.closest(".btn-minus")) {
        decreaseQuantity(itemInStore)
      }

      if (e.target.closest(".cart-item__remove")) {
        removeCartItem(itemInStore)
      }
    })
    container.dataset.listener = "true"
  }
}

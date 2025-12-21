import { getCart } from "../store/cartStore.js"
import { increaseQuantity, decreaseQuantity, removeCartItem } from "../store/cartActions.js"
import { renderCartList } from "../ui/cart/renderCartList.js"
import { calculateOrderDetails } from "../utils/cartUtils.js"
import { renderOrderSummary } from "../ui/orderSummery/renderOrderSummery.js"

const container = document.querySelector(".cart-list")

function CartPage() {
  const cart = getCart()
  const summaryContainer = document.querySelector(".order-summary")

  renderCartList(cart)

  const orderData = calculateOrderDetails(cart)

  renderOrderSummary(summaryContainer, orderData)
}

document.addEventListener("DOMContentLoaded", () => {
  CartPage()

  window.addEventListener("cartUpdated", () => {
    CartPage()
  })

  window.addEventListener("storage", (e) => {
    if (e.key === "cart") {
      CartPage()
    }
  })

  container.addEventListener("click", (e) => {
    const cartItemEl = e.target.closest(".cart-item")
    if (!cartItemEl) return

    const id = Number(cartItemEl.dataset.id)
    const color = cartItemEl.dataset.color
    const size = cartItemEl.dataset.size

    // compaire with item from state
    const cart = getCart()
    const itemInStore = cart.find(
      (i) => i.id === id && i.selectedColor === color && i.selectedSize === size
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
})

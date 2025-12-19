import { getCart } from "../store/cartStore.js"
import { renderCart } from "../ui/cart/renderCartList.js"
import { calculateCartTotal } from "../utils/cartUtils.js"

document.addEventListener("DOMContentLoaded", () => {
  const cart = getCart()

  renderCart(cart)

  console.log("CART:", cart)

  const totalEl = document.querySelector(".order-summary__row--total")
  totalEl.textContent = `$${calculateCartTotal(cart)}`
})

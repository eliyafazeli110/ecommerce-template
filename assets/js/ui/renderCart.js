import { renderCartItem } from "./renderCartItem.js"

export function renderCart(cartItems) {
  const container = document.querySelector(".cart-list")

  if (!container) return

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>"
    return
  }

  container.innerHTML = cartItems.map(renderCartItem).join("")
}

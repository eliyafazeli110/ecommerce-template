import { renderCartItem } from "./renderCartItem.js"

export function renderCartList(cartItems) {
  const container = document.querySelector(".cart-list")

  if (!container) {
    console.warn("Cart container not found")
    return
  }

  if (cartItems.length === 0) {
    container.innerHTML = "<p style='font-size:2rem'>Your cart is empty</p>"
    return
  }

  container.innerHTML = cartItems.map(renderCartItem).join("")
}

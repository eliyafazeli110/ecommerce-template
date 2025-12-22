import { getCart } from "../../store/cartStore.js"

export function updateCartCounter() {
  const cart = getCart()
  const counterEl = document.querySelector(".navbar__cart-count")

  if (!counterEl) return

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  counterEl.textContent = totalItems

  counterEl.style.display = totalItems > 0 ? "flex" : "none"
}

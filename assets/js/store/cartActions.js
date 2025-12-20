import { updateCartItemQuantity, removeFromCart } from "./cartStore.js"

export function increaseQuantity(item) {
  updateCartItemQuantity(item.id, item.selectedColor, item.selectedSize, 1)
}

export function decreaseQuantity(item) {
  if (item.quantity <= 1) return

  updateCartItemQuantity(item.id, item.selectedColor, item.selectedSize, -1)
}

export function removeCartItem(item) {
  removeFromCart(item.id, item.selectedColor, item.selectedSize)
}

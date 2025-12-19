import { getCart, saveCart } from "./cartStore.js"
import { mapProductToCartItem } from "../models/productMapper.js"

export function addToCart(product, options) {
  const cart = getCart()

  const existingItem = cart.find(
    (item) =>
      item.id === product.id &&
      item.selectedColor === options.color &&
      item.selectedSize === options.size
  )

  if (existingItem) {
    existingItem.quantity += options.quantity
  } else {
    cart.push(mapProductToCartItem(product, options))
  }

  saveCart(cart)
}

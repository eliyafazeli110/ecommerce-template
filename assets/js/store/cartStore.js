const CART_KEY = "cart"

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || []
}

export function addToCart(cartItem) {
  const cart = getCart()

  const existingItem = cart.find(
    (item) =>
      item.id === cartItem.id &&
      item.selectedColor === cartItem.selectedColor &&
      item.selectedSize === cartItem.selectedSize
  )

  if (existingItem) {
    existingItem.quantity += cartItem.quantity
  } else {
    cart.push(cartItem)
  }

  saveCart(cart)
}

export function updateCartItemQuantity(id, color, size, delta) {
  const cart = getCart()

  const item = cart.find((i) => i.id === id && i.selectedColor === color && i.selectedSize === size)
  if (!item) return

  item.quantity += delta

  if (item.quantity <= 0) {
    removeFromCart(id)
    return
  }

  saveCart(cart)
}

export function removeFromCart(id, color, size) {
  const cart = getCart().filter(
    (i) => !(i.id === id && i.selectedColor === color && i.selectedSize === size)
  )
  saveCart(cart)
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))

  const event = new CustomEvent("cartUpdated")
  window.dispatchEvent(event)
}

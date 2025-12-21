export function calculateOrderDetails(cart) {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const discountPercent = 20

  const discountAmount = (subtotal * discountPercent) / 100

  const deliveryFee = subtotal > 500 || subtotal === 0 ? 0 : 15

  const total = subtotal - discountAmount + deliveryFee

  return {
    subtotal,
    discountAmount,
    deliveryFee,
    total,
    discountPercent,
  }
}

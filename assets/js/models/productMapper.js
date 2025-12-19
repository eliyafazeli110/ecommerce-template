export function mapProductToCartItem(product, options) {
  return {
    id: product.id,
    name: product.name,
    price: product.price.current,
    image: product.images.find((img) => img.is_primary)?.url,

    quantity: options.quantity,
    selectedColor: options.color,
    selectedSize: options.size,
  }
}

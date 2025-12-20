import { getMainImage } from "../services/productService.js"

export function mapProductToCartItem(product, options) {
  return {
    id: product.id,
    name: product.name,
    price: product.price.current,
    image: getMainImage(product.images).url,

    quantity: options.quantity,
    selectedColor: options.color,
    selectedSize: options.size,
  }
}

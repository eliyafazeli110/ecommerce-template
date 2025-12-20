import { getMainImage } from "../../services/productService.js"

export function renderProductGallery(product) {
  const gallery = document.querySelector(".product__gallery")
  if (!gallery) return

  const mainImage = getMainImage(product.images)

  gallery.innerHTML = `
    <div class="product__image-thumbnails">
      ${product.images
        .map(
          (img) => `
          <img 
            src="${img.url}" 
            class="thumb ${img.url === mainImage.url ? "active" : ""}" 
            data-src="${img.url}"
          />
        `
        )
        .join("")}
    </div>

    <div class="product__image-main">
      <div class="main-img-wrapper">
        <img src="${mainImage.url}" class="main-image" />
      </div>
    </div>
  `
}

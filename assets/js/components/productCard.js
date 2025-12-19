import { renderStars } from "../ui/renderStars.js"

export function createProductCard(product) {
  return `
  <a href="/product-detail-page.html?id=${product.id}" class="product-card swiper-slide">
      <div class="product-card__image">
        <img src=${product.images[0].url} alt="" />
      </div>

      <div class="product-card__info">
        <h3 class="product-card__title">${product.name}</h3>

        <div class="product-card__rating">
          ${renderStars(product.rating.average)}
          <p>${product.rating.average}</p>
        </div>
      </div>

      <div class="product-card__price">
        <span class="product-card__price--current">$${product.price.current}</span>
        <span class="product-card__price--old">$${product.price.old}</span>
      </div>
    </a>
  `
}

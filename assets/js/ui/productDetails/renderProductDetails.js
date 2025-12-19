import { renderStars } from "../renderStars.js"

export function renderProductDetails(product) {
  const container = document.querySelector(".product__info")

  const discountPercent = product.price.old
    ? Math.round(((product.price.old - product.price.current) / product.price.old) * 100)
    : 0

  container.innerHTML = `
    <h1 class="product__title">${product.name}</h1>

    <!-- Rating -->
    <div class="product__rating">
      ${renderStars(product.rating.average)}
      <span>${product.rating.average}/5</span>
    </div>

    <div class="product__price">
      <span class="product__price--current">$${product.price.current}</span>
      ${
        product.price.old
          ? `<span class="product__price--old">$${product.price.old}</span>
             <span class="product__discount-percentage">-${discountPercent}%</span>`
          : ""
      }
    </div>

    <!-- Description -->
    <p class="product__description">${product.description}</p>

    <!-- Colors -->
    <div class="product__colors-wrap">
      <p>Select Colors:</p>
      <div class="product__colors">
        ${product.colors
          .map((color) => `<div class="color color--${color}" data-color="${color}"></div>`)
          .join("")}
      </div>
    </div>

    <!-- Sizes -->
    <div class="product__sizes">
      <p>Choose Size:</p>
      <div>
        <button class="size" data-size="small">Small</button>
        <button class="size" data-size="medium">Medium</button>
        <button class="size" data-size="large">Large</button>
        <button class="size" data-size="xlarge">X-Large</button>
      </div>
    </div>

    <!-- CTA Buttons -->
    <div class="product__ctas">
      <div class="product__counter">
        <button class="btn btn-minus">-</button>
        <p class="current-quantity">1</p>
        <button class="btn btn-plus">+</button>
      </div>
      <button class="btn--primary">Add to Cart</button>
    </div>
  `
}

export function renderOrderSummary(container, orderData) {
  const { subtotal, discountAmount, deliveryFee, total, discountPercent } = orderData

  if (subtotal === 0) {
    container.innerHTML = ""
    return
  }

  container.innerHTML = `
    <h3 class="order-summary__title">Order Summary</h3>

    <div class="order-summary__list">
      <div class="order-summary__row">
        <span>Subtotal</span>
        <span class="order-summary__subtotal">$${subtotal}</span>
      </div>

      <div class="order-summary__row">
        <span>Discount (-${discountPercent}%)</span>
        <span class="order-summary__discount">-$${discountAmount}</span>
      </div>

      <div class="order-summary__row">
        <span>Delivery Fee</span>
        <span class="order-summary__delivery">${
          deliveryFee === 0 ? "Free" : `$${deliveryFee}`
        }</span>
      </div>

      <div class="order-summary__row order-summary__row--total">
        <span>Total</span>
        <span class="order-summary__total-price">$${total}</span>
      </div>
    </div>

    <div class="order-summary__promo">
      <div class="order-summary__promo-input">
        <span class="order-summary__promo-icon">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.4516 9.86063L11.1403 0.549383C10.9667 0.374635 10.7601 0.236091 10.5326 0.141785C10.305 0.0474796 10.061 -0.000710913 9.8147 7.92487e-06H1.12501C0.826639 7.92487e-06 0.540491 0.118534 0.329513 0.329513C0.118534 0.540491 7.92487e-06 0.826639 7.92487e-06 1.12501V9.8147C-0.000710913 10.061 0.0474796 10.305 0.141785 10.5326C0.236091 10.7601 0.374635 10.9667 0.549383 11.1403L9.86063 20.4516C10.2122 20.8031 10.6891 21.0005 11.1863 21.0005C11.6834 21.0005 12.1603 20.8031 12.5119 20.4516L20.4516 12.5119C20.8031 12.1603 21.0005 11.6834 21.0005 11.1863C21.0005 10.6891 20.8031 10.2122 20.4516 9.86063ZM11.1863 18.5953L2.25001 9.65626V2.25001H9.65626L18.5925 11.1863L11.1863 18.5953ZM6.75001 5.25001C6.75001 5.54668 6.66203 5.83669 6.49721 6.08336C6.33239 6.33004 6.09812 6.5223 5.82403 6.63583C5.54994 6.74936 5.24834 6.77906 4.95737 6.72119C4.6664 6.66331 4.39913 6.52045 4.18935 6.31067C3.97957 6.10089 3.83671 5.83361 3.77883 5.54264C3.72095 5.25167 3.75066 4.95007 3.86419 4.67598C3.97772 4.40189 4.16998 4.16763 4.41665 4.0028C4.66333 3.83798 4.95334 3.75001 5.25001 3.75001C5.64783 3.75001 6.02936 3.90804 6.31067 4.18935C6.59197 4.47065 6.75001 4.85218 6.75001 5.25001Z"
              fill="black"
              fill-opacity="0.4"
            />
          </svg>
        </span>
        <input
          class="order-summary__promo-field"
          type="text"
          placeholder="Add promo code"
        />
      </div>

      <button class="order-summary__promo-apply">Apply</button>
    </div>

    <button class="order-summary__checkout">
      Go to Checkout
      <svg
        width="19"
        height="16"
        viewBox="0 0 19 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6709 0.331972L18.4209 7.08197C18.5258 7.18649 18.609 7.31068 18.6658 7.44743C18.7226 7.58417 18.7518 7.73078 18.7518 7.87885C18.7518 8.02691 18.7226 8.17352 18.6658 8.31027C18.609 8.44701 18.5258 8.57121 18.4209 8.67572L11.6709 15.4257C11.4596 15.6371 11.1729 15.7558 10.8741 15.7558C10.5752 15.7558 10.2885 15.6371 10.0772 15.4257C9.86584 15.2144 9.74711 14.9277 9.74711 14.6288C9.74711 14.33 9.86584 14.0433 10.0772 13.832L14.9063 9.00291L1.125 9.00291C0.826632 9.00291 0.540483 8.88438 0.329505 8.6734C0.118527 8.46243 9.03849e-08 8.17628 9.39429e-08 7.87791C9.75009e-08 7.57954 0.118527 7.29339 0.329505 7.08241C0.540483 6.87144 0.826632 6.75291 1.125 6.75291L14.9063 6.75291L10.0763 1.92385C9.86491 1.7125 9.74617 1.42586 9.74617 1.12697C9.74617 0.828087 9.86491 0.541443 10.0763 0.330098C10.2876 0.118754 10.5742 1.91996e-05 10.8731 1.92031e-05C11.172 1.92067e-05 11.4587 0.118754 11.67 0.330098L11.6709 0.331972Z"
          fill="white"
        />
      </svg>
    </button>
  `
}

import initHomePage from "./pages/homePage.js"
import { initHeroTyping } from "./ui/shared/heroTyping.js"
import { initCounters } from "./ui/shared/counter.js"
import { initProductDetails } from "./pages/productDetails.js"
import { updateCartCounter } from "./ui/navbar/updateCartCounter.js"
import { initCartPage } from "./pages/cartPage.js"
import { initNavbarToggle } from "./ui/navbar/navbar.toggle.js"
import { priceRange } from "./ui/shared/priceRange.js"
import { initSliders } from "./ui/shared/swiper.js"

document.addEventListener("DOMContentLoaded", () => {
  updateCartCounter()

  window.addEventListener("cartUpdated", () => {
    updateCartCounter()
  })

  window.addEventListener("storage", (e) => {
    if (e.key === "cart") {
      updateCartCounter()
    }
  })

  initHomePage()
  initProductDetails()
  initCartPage()
  initNavbarToggle()
  initSliders()
  priceRange()
})

window.addEventListener("load", () => {
  initHeroTyping()
  initCounters()
})

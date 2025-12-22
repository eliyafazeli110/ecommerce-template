import initHomePage from "./pages/homePage.js"
import { initHeroTyping } from "./ui/heroTyping.js"
import { initCounters } from "./ui/counter.js"
import { initProductDetails } from "./pages/productDetails.js"
import { updateCartCounter } from "./ui/navbar/updateCartCounter.js"
import { initCartPage } from "./pages/cartPage.js"

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
})

window.addEventListener("load", () => {
  initHeroTyping()
  initCounters()
})

import initHomePage from "./pages/homePage.js"
import { initHeroTyping } from "./ui/heroTyping.js"
import { initCounters } from "./ui/counter.js"
import { initProductDetails } from "./pages/productDetails.js"

document.addEventListener("DOMContentLoaded", () => {
  initHomePage()
  initProductDetails()
})

window.addEventListener("load", () => {
  initHeroTyping()
  initCounters()
})

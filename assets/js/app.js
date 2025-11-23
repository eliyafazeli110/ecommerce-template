const $ = document
const heroTitle = $.querySelector(".hero__title")
const countBrands = $.querySelector(".count-brands")
const countProducts = $.querySelector(".count-products")
const countCustomers = $.querySelector(".count-customers")

window.addEventListener("load", () => {
  let heroTitleText = "FIND CLOTHES THAT MATCHES YOUR STYLE"

  typeWriter(heroTitleText, 0)
  makeCounter(40, countBrands, 90)
  makeCounter(100, countProducts, 60)
  makeCounter(1200, countCustomers, 5)
})

function makeCounter(max, elem, speed) {
  let counter = 0
  const interval = setInterval(() => {
    if (counter == max) {
      clearInterval(interval)
    }

    elem.textContent = counter + "+"
    counter++
  }, speed)
}

function typeWriter(text, index) {
  if (index < text.length) {
    const span = document.createElement("span")
    span.textContent = text[index]
    heroTitle.appendChild(span)

    index++
    setTimeout(() => typeWriter(text, index), 100)
  }
}

export function initCounters() {
  const countBrands = document.querySelector(".count-brands")
  const countProducts = document.querySelector(".count-products")
  const countCustomers = document.querySelector(".count-customers")

  if (!countBrands || !countProducts || !countCustomers) return

  makeCounter(40, countBrands, 90)
  makeCounter(100, countProducts, 60)
  makeCounter(1200, countCustomers, 5)
}

function makeCounter(max, elem, speed) {
  let counter = 0
  const interval = setInterval(() => {
    if (counter === max) {
      clearInterval(interval)
    }
    elem.textContent = counter + "+"
    counter++
  }, speed)
}

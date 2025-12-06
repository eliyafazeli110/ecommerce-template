const $ = document
const heroTitle = $.querySelector(".hero__title")
const countBrands = $.querySelector(".count-brands")
const countProducts = $.querySelector(".count-products")
const countCustomers = $.querySelector(".count-customers")

window.addEventListener("load", () => {
  typeWord()

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

function typeWord() {
  let text = "FIND CLOTHES THAT MATCHES YOUR STYLE"

  const words = text.split(" ")
  let wordIndex = 0
  let charIndex = 0

  function writeWord() {
    if (wordIndex >= words.length) return

    const wordSpan = document.createElement("span")
    heroTitle.appendChild(wordSpan)

    function typeChar() {
      if (charIndex < words[wordIndex].length) {
        wordSpan.textContent += words[wordIndex][charIndex]
        charIndex++

        const randomSpeed = Math.floor(Math.random() * 50) + 40
        setTimeout(typeChar, randomSpeed)
      } else {
        heroTitle.appendChild(document.createTextNode(" "))

        wordIndex++
        charIndex = 0

        setTimeout(writeWord, 150)
      }
    }
    typeChar()
  }
  writeWord()
}

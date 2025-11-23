const $ = document
const heroTitle = $.querySelector(".hero__title")

window.addEventListener("load", () => {
  let heroTitleText = "FIND CLOTHES THAT MATCHES YOUR STYLE"
  typeWriter(heroTitleText, 0)
})

function typeWriter(text, index) {
  if (index < text.length) {
    const span = document.createElement("span")
    span.textContent = text[index]
    heroTitle.appendChild(span)

    index++
    setTimeout(() => typeWriter(text, index), 100)
  }
}

export function initHeroTyping() {
  const heroTitle = document.querySelector(".hero__title")
  if (!heroTitle) return

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

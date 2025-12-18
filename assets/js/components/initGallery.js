export function initGalleryInteractions() {
  const mainImg = document.querySelector(".main-image")
  const thumbnails = document.querySelectorAll(".thumb")

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const newSrc = thumb.dataset.src

      mainImg.src = newSrc

      thumbnails.forEach((t) => t.classList.remove("active"))
      thumb.classList.add("active")
    })
  })
}

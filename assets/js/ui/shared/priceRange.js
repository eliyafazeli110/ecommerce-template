export function priceRange() {
  const slider = document.getElementById("slider")
  if (!slider) return
  const thumbLeft = document.getElementById("thumbLeft")
  const thumbRight = document.getElementById("thumbRight")
  const range = document.getElementById("range")

  const minValueEl = document.getElementById("minValue")
  const maxValueEl = document.getElementById("maxValue")

  let min = 50
  let max = 200
  let minLimit = 0
  let maxLimit = 500

  let active = null

  function updateUI() {
    const percentLeft = ((min - minLimit) / (maxLimit - minLimit)) * 100
    const percentRight = ((max - minLimit) / (maxLimit - minLimit)) * 100

    thumbLeft.style.left = percentLeft + "%"
    thumbRight.style.left = percentRight + "%"

    range.style.left = percentLeft + "%"
    range.style.width = percentRight - percentLeft + "%"

    minValueEl.textContent = Math.round(min)
    maxValueEl.textContent = Math.round(max)
  }

  function startDrag(e, handle) {
    active = handle
    e.preventDefault()
  }

  function duringDrag(e) {
    if (!active) return

    const rect = slider.getBoundingClientRect()
    const x = e.touches ? e.touches[0].clientX : e.clientX
    let percent = ((x - rect.left) / rect.width) * 100

    percent = Math.max(0, Math.min(100, percent))
    const value = minLimit + (percent / 100) * (maxLimit - minLimit)

    if (active === "left") {
      min = Math.min(value, max - 20)
    } else {
      max = Math.max(value, min + 20)
    }

    updateUI()
  }

  function stopDrag() {
    active = null
  }

  thumbLeft.addEventListener("mousedown", (e) => startDrag(e, "left"))
  thumbRight.addEventListener("mousedown", (e) => startDrag(e, "right"))

  document.addEventListener("mousemove", duringDrag)
  document.addEventListener("mouseup", stopDrag)

  thumbLeft.addEventListener("touchstart", (e) => startDrag(e, "left"))
  thumbRight.addEventListener("touchstart", (e) => startDrag(e, "right"))

  document.addEventListener("touchmove", duringDrag)
  document.addEventListener("touchend", stopDrag)

  updateUI()
}

export default function initQuantityController({
  minusBtn,
  plusBtn,
  valueEl,
  initialValue = 1,
  min = 1,
  onChange,
}) {
  let value = initialValue
  valueEl.textContent = value

  plusBtn.addEventListener("click", () => {
    value++
    valueEl.textContent = value
    onChange?.(value)
  })

  minusBtn.addEventListener("click", () => {
    if (value > min) {
      value--
      valueEl.textContent = value
      onChange?.(value)
    }
  })
}

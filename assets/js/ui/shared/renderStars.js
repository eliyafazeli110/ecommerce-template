export function renderStars(rate) {
  const fullStars = Math.round(rate)

  return Array.from({ length: 5 })
    .map((_, i) => {
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
          <path fill="${i < fullStars ? "#ffc633" : "#ddd"}"
            d="m8.792 0 2.62 5.64 6.173.748-4.555 4.234 1.197 6.102-5.435-3.023-5.434 3.023 1.196-6.102L0 6.388l6.173-.748z"/>
        </svg>
      `
    })
    .join("")
}

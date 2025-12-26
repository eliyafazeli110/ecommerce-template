export function renderLoadMoreButton(container) {
  if (!container) return

  const wrapper = document.createElement("div")
  wrapper.className = "load-more"
  wrapper.innerHTML = `<a class="load-more-btn" href="#">Load More Review</a>`

  container.appendChild(wrapper)
}

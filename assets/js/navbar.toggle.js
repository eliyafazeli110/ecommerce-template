// navbar-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar")
  const btn = document.querySelector(".navbar__hamburger")
  const mobileMenu = document.querySelector(".navbar__mobile-menu")

  if (!btn || !navbar || !mobileMenu) return

  btn.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("navbar--menu-open")
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false")
    mobileMenu.setAttribute("aria-hidden", !isOpen ? "true" : "false")
  })

  // close menu when clicking overlay
  document.addEventListener("click", (e) => {
    if (!navbar.classList.contains("navbar--menu-open")) return
    // if click is outside mobileMenu and not the hamburger
    if (!mobileMenu.contains(e.target) && !btn.contains(e.target)) {
      navbar.classList.remove("navbar--menu-open")
      btn.setAttribute("aria-expanded", "false")
      mobileMenu.setAttribute("aria-hidden", "true")
    }
  })
})

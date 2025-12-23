export function initNavbarToggle() {
  const navbar = document.querySelector(".navbar")
  const btn = document.querySelector(".navbar__hamburger")
  const mobileMenu = document.querySelector(".navbar__mobile-menu")
  const body = document.body

  if (!btn || !navbar || !mobileMenu) return

  // تابع کمکی برای مدیریت وضعیت منو
  const toggleMenu = (show) => {
    navbar.classList.toggle("navbar--menu-open", show)
    btn.setAttribute("aria-expanded", show)
    mobileMenu.setAttribute("aria-hidden", !show)

    // قفل کردن اسکرول صفحه: اگر منو باز بود، اسکرول مخفی شود
    body.style.overflow = show ? "hidden" : ""
  }

  btn.addEventListener("click", () => {
    const isOpening = !navbar.classList.contains("navbar--menu-open")
    toggleMenu(isOpening)
  })

  // بستن منو با کلیک به بیرون
  document.addEventListener("click", (e) => {
    if (!navbar.classList.contains("navbar--menu-open")) return

    if (!mobileMenu.contains(e.target) && !btn.contains(e.target)) {
      toggleMenu(false)
    }
  })
}

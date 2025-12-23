export function initSliders() {
  // --- اسلایدر محصولات ---
  const productSlider = document.querySelector(".swiper")
  if (productSlider) {
    new Swiper(".swiper", {
      loop: false,
      spaceBetween: 20,
      centeredSlides: true,
      breakpoints: {
        250: { slidesPerView: 1.1, spaceBetween: 10 },
        320: { slidesPerView: 1.5, spaceBetween: 15 },
        640: { slidesPerView: 2.5, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20, centeredSlides: false },
        1440: { slidesPerView: 4, spaceBetween: 20, centeredSlides: false },
      },
    })
  }

  // --- اسلایدر نظرات مشتریان ---
  const testimonialsSlider = document.querySelector(".testimonials__grid")
  if (testimonialsSlider) {
    new Swiper(".testimonials__grid", {
      loop: false,
      watchOverflow: true,
      navigation: {
        nextEl: ".testimonials__btn--next", // مستقیم کلاس را بده، Swiper خودش مدیریت می‌کند
        prevEl: ".testimonials__btn--prev",
      },
      breakpoints: {
        250: { slidesPerView: 1.1, spaceBetween: 16 },
        320: { slidesPerView: 1.3, spaceBetween: 24 },
        640: { slidesPerView: 2.3, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
        1440: { slidesPerView: 3.3, spaceBetween: 24 },
      },
    })
  }
}

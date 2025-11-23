const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,

  breakpoints: {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 4 },
  },
})

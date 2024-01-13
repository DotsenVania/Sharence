const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // Додайте брейкпоінти для різних розмірів екрану
    400: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.5,
    },
    700: {
      slidesPerView: 1.7,
    },
  },
  spaceBetween: 30,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperTwo = new Swiper('.swiper-two', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  breakpoints: {
    320: {
        slidesPerView: 1.8,
    },
    424: {
      slidesPerView: 2.8,
    },
    769: {
      slidesPerView: 3.8,
    },
    1024: {
      slidesPerView: 4.8,
    },
    1440: {
      slidesPerView: 5.8,
    },
    1980: {
      slidesPerView: 5,
    }
  },
  centeredSlides: true,
  spaceBetween: 30,
});

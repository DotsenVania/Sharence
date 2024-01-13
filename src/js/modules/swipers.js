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
        slidesPerView: 2,
    },
    400: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 3.5,
    },
    1000: {
      slidesPerView: 3.7,
    },
    1300: {
      slidesPerView: 4.7,
    },
    1600: {
      slidesPerView: 5.8,
    },
    1900: {
      slidesPerView: 6,
    },
  },
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 30,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

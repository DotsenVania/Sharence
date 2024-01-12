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
        600:  {
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

 
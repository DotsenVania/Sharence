import { BurgerActive } from '../modules/burger';
const element = document.querySelector('.page');
const element2 = document.querySelector('.burger-menu');

const hammertime = new Hammer(element);
const hammertime2 = new Hammer(element2);

const burgerActive = new BurgerActive('.burger-menu', '.burger-menu__icon');
let size = window.innerWidth; 
window.addEventListener('resize', e => {
  size = window.innerWidth;
})

  hammertime.on('swipeleft', function (event) {
    if(size < 991) {
      const target = event.target; 
      if (target.closest('.swiper') || target.closest('.swiper-fifth') || target.closest('.swiper-two')) {
        return;
      }
    burgerActive.toggleActiveClickSwipe();
    }
  })

hammertime2.on('swiperight', function (event) {
    console.log(event.target)
  burgerActive.toggleActiveClickSwipe();
});



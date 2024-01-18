function moveBlockOnResize() {
  const moreBlock = document.querySelector('.seventh-block__more');
  const rightWrapper = document.querySelector('.seventh-block-right');

  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  if (windowWidth <= 600) {
    rightWrapper.appendChild(moreBlock);
  } else {
    const seventhBlock = document.querySelector('.seventh-block');
    seventhBlock.appendChild(moreBlock);
  }
}

moveBlockOnResize();

window.addEventListener('resize', moveBlockOnResize);

const screens = document.querySelectorAll('.screen');
const menuInfo = document.querySelectorAll('.more_item');

function menuActive(elem) {
    if(!elem) {
        menuInfo.forEach((item, i) =>
        i == 0 ? (item.style.color = 'white') : (item.style.color = null)
      ); 
      return; 
    }
  menuInfo.forEach((i) =>
    elem === i ? (i.style.color = 'white') : (i.style.color = null)
  );
}

function activeScreen(screen) {
    if(!screen) {
        screens.forEach((item, i) =>
        i == 0 ? (item.style.opacity = '1') : (item.style.opacity = '0')
      ); 
      return; 
    }
    screens.forEach((i) =>
    screen === i ? (i.style.opacity = '1') : (i.style.opacity = '0')
  );
}


menuActive(); 
activeScreen()

menuInfo.forEach((i, num) => {
  i.addEventListener('click', (e) => {
    menuActive(i);
    activeScreen(screens[num]); 
  });
});

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

function menuActive(num) {
  if (!num) {
    menuInfo.forEach((item, i) =>
      i+1 === 1 ? (item.style.color = 'white') : (item.style.color = null)
    );
    return;
  }
  menuInfo.forEach((item) =>
    num === +item.getAttribute('data-by-screen-id') ? (item.style.color = 'white') : (item.style.color = null)
  );
}

function activeScreen(numScreen) {
  if (!numScreen) {
    screens.forEach((item, i) =>
    i+1 === 1 ? (item.style.opacity = '1') : (item.style.opacity = '0')
    );
    return;
  }
  screens.forEach((item) => {
    numScreen === +item.getAttribute('data-screen-id')
      ? (item.style.opacity = '1')
      : (item.style.opacity = '0');
  });
}

let activNum = 2
menuActive(activNum);
activeScreen(activNum);

menuInfo.forEach((i, num) => {
  i.addEventListener('click', (e) => {
    menuActive(+i.getAttribute('data-by-screen-id'));
    activeScreen(+i.getAttribute('data-by-screen-id'));
  });
});

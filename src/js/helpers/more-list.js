function moreContent(btnSelector, contentSection, [...sectionsSelector]) {
  let counterSize = 20;

  sectionsSelector.forEach((el) => {
    counterSize += parseFloat(window.getComputedStyle(el).height);
  });

  let oldSize = parseFloat(window.getComputedStyle(contentSection).height);
  let newSize = 0;

  let windowWidth = window.innerWidth || document.documentElement.clientWidth;
  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth || document.documentElement.clientWidth;
    oldSize = parseFloat(window.getComputedStyle(contentSection).height);
  });

  btnSelector.addEventListener('click', (e) => {
    if (windowWidth < 769) {
      newSize = parseFloat(window.getComputedStyle(contentSection).height);
      if (newSize + 1 < counterSize) {
        contentSection.style.height = counterSize + 'px';
        contentSection.classList.add('active');
        btnSelector.classList.add('active');
        console.log(newSize + ' ' + counterSize);
      } else {
        console.log('else');
        contentSection.classList.remove('active');
        btnSelector.classList.remove('active');
        contentSection.style.height = oldSize + 'px';
      }
    }
  });
}

const btnMore = document.querySelector('.button__more');
const contentBlocks = document.querySelectorAll('.content-block');
const contentSection = document.querySelector('.section-content');
moreContent(btnMore, contentSection, contentBlocks);



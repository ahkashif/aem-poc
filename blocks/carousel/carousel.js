export default async function decorate(block) {
  [...block.children].forEach((row, i) => {
    row.classList.add('carousel-block-item');
    row.classList.add(`carousel-block-item-${i + 1}`);
    if (i === 1) {
      [...row.children].forEach((ele, j) => {
        ele.classList.add('carousel-item');
        ele.classList.add(`carousel-item-${j + 1}`);
      });
    }

    if (i === 2) {
      if (row.querySelector('.button')) {
        row.querySelector('.button').classList.add('button-with-icon');
        row.querySelector('.button').classList.add('icon-right-arrow');
      }
    }
  });
  const carouselItems = block.querySelectorAll('.carousel-item');

  const setTheCarousel = (items) => {
    [...items][0].classList.add('top');
    [...items][1].classList.add('next');
  };

  const nextButton = block.querySelector('.button');

  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
  });

  setTheCarousel(carouselItems);
}

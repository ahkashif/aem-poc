/*eslint-disable */
// export default async function decorate(block) {
//   [...block.children].forEach((row, i) => {
//     row.classList.add('carousel-block-item');
//     row.classList.add(`carousel-block-item-${i + 1}`);
//     if (i === 1) {
//       [...row.children].forEach((ele, j) => {
//         ele.classList.add('carousel-item');
//         ele.classList.add(`carousel-item-${j + 1}`);
//       });
//     }

//     if (i === 2) {
//       if (row.querySelector('.button')) {
//         row.querySelector('.button').classList.add('button-with-icon');
//         row.querySelector('.button').classList.add('icon-right-arrow');
//       }
//     }
//   });
//   const carouselItems = block.querySelectorAll('.carousel-item');

//   const setTheCarousel = (items) => {
//     [...items][0].classList.add('top');
//     [...items][1].classList.add('next');
//   };

//   const nextButton = block.querySelector('.button');

//   nextButton.addEventListener('click', (e) => {
//     e.preventDefault();
//   });

//   setTheCarousel(carouselItems);
// }

// Jquery 
async function decorate(block) {
  const $block = $(block);
  $block.children().each((i, row) => {
    $(row).addClass("carousel-block-item");
    $(row).addClass(`carousel-block-item-${i + 1}`);

    if (i === 1) {
      $(row)
        .children()
        .each(function (j, ele) {
          $(ele).addClass("carousel-item");
          $(ele).addClass(`carousel-item-${j + 1}`);
        });
    }

    if (i === 2) {
      var $button = $(row).find(".button");
      if ($button.length) {
        $button.addClass("button-with-icon icon-right-arrow");
      }
    }
  });

  var $carouselItems = $block.find(".carousel-item");

  var setTheCarousel = function ($items) {
    $items.eq(0).addClass("top");
    $items.eq(1).addClass("next");
  };

  var $nextButton = $block.find(".button");

  $nextButton.on("click", function (e) {
    e.preventDefault();
  });

  setTheCarousel($carouselItems);
}

export default decorate;

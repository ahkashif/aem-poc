export default async function decorate(block) {
  block.parentElement.classList.add('full-width');
  [...block.children].forEach((row) => {
    [...row.children].forEach((ele) => {
      const heading = ele.querySelector('h2');
      if (!ele.classList.contains('button-container') && heading === null) {
        ele.classList.add('q-and-a');
        [...ele.children].forEach((ele1, k) => {
          if (k === 0) {
            ele1.classList.add('question');
          } else if (k === 1) {
            ele1.classList.add('answer');
          }
        });
      } else if (ele.querySelector('.button')) {
        ele.querySelector('.button').classList.add('button-with-icon');
        ele.querySelector('.button').classList.add('icon-right-arrow');
      }
    });
  });

  const faqBlocks = document.querySelectorAll('.faq.block .q-and-a');

  faqBlocks.forEach((eachBlock) => {
    eachBlock.addEventListener('click', () => {
      // Close all other opened blocks
      faqBlocks.forEach((b) => {
        if (b !== this) {
          b.parentNode.classList.remove('active');
        }
      });

      // Toggle the clicked block
      this.parentNode.classList.toggle('active');
    });
  });
}

export default async function decorate(block) {
  block.parentElement.classList.add('full-width');
  [...block.children].forEach((row, i) => {
    if (i === 0) {
      row.className = 'offer-cards-header';
    } else if (i === 1) {
      row.className = 'offer-cards-content';
      [...row.children].forEach((ele) => {
        ele.className = `card card-${i + 1}`;
      });
    } else if (i === 2) {
      row.className = 'offer-cards-footer';
    }
  });
}

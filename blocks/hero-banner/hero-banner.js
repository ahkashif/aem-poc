export default async function decorate(block) {
    block.parentElement.classList.add('full-width');
    [...block.children].forEach((row, i) => {
        if (i === 0) {
            row.classList.add('hero-banner-image-container');
        } else if (i === 1) {
            row.classList.add('hero-banner-specs-container');
            [...row.children].forEach((ele, j) => {
                if (j !== 0) {
                    ele.className = 'hero-banner-specs-container-col';
                }
                ele.classList.add(`hero-banner-specs-container-col-${j + 1}`);
            })
        }
    })
}
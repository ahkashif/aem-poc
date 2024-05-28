export default async function decorate(block) {
    const gradient = document.createElement('div');
    gradient.classList.add('gradient');
    block.parentNode.appendChild(gradient);

    [...block.children].forEach((row, index) => {
        if (index === 1) {
            row.className = 'banner-content-wrapper';
            [...row.children].forEach((element, i) => {
                if (i === 0) {
                    element.className = 'banner-section-name';
                } else if (i === 1) {
                    element.className = 'banner-text-section';
                } else  {
                    element.className = 'banner-cta-section';
                }
            });
        } else if (index === 0) {
            row.className = 'banner-image-wrapper';
            [...row.children].forEach(( element) => {
                // element.className = 'cta-with-icon';
            });
        }
    })
}
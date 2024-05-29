export default async function decorate(block) {
    block.parentElement.classList.add('full-width');
    [...block.children].forEach((row, i) => {
        [...row.children].forEach((ele, j) => {
            const heading = ele.querySelector('h2')
            if (!ele.classList.contains('button-container') && heading === null) {
                ele.classList.add('QandA');
                [...ele.children].forEach((ele1, k) => {
                    if (k === 0) {
                        ele1.classList.add('question');
                    } else if (k === 1) {
                        ele1.classList.add('answer');
                    }
                })
            } else {
                if (ele.querySelector('.button')) {
                    ele.querySelector('.button').classList.add('button-with-icon');
                    ele.querySelector('.button').classList.add('icon-right-arrow');
                }
            }
        })
    })

    const faqBlocks = document.querySelectorAll('.faq.block .QandA');
    faqBlocks.forEach(block => {
        block.addEventListener('click', function () {
            // Close all other opened blocks
            faqBlocks.forEach(b => {
                if (b !== this) {
                    b.parentNode.classList.remove('active');
                }
            });

            // Toggle the clicked block
            this.parentNode.classList.toggle('active');
        });
    });
}
export default async function decorate(block) {
    [...block.children].forEach((row, index) => {
        if (index === 0) {
            const ele = row.querySelector('p');
            ele.className = 'next-steps-heading'
        }
    })
}
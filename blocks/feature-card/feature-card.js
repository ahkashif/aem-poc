export default async function decorate(block) {
    [...block.children].forEach((row, i) => {
        row.className = `feature-card-section-wrapper`;
        [...row.children].forEach((ele, j) => {
            ele.className = `feature-card-section-${j + 1}`;
        })
    })
}
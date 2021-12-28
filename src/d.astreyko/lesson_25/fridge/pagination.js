let itemsPerPage = 4;
let selectedPageIndex = 0;
const paginationPagesElement = document.querySelector('#paginationPages');

function onPaginationChange(event) {
    itemsPerPage = parseInt(event.target.value);
    selectedPageIndex = 0;
    renderPagination(data);
    render();
}

function nextPage() {
    selectedPageIndex++;
    renderPagination(data);
    render();
}

function prevPage() {
    selectedPageIndex--;
    renderPagination(data);
    render();
}

function getPageItems(allProduct) {
    const startIndex = selectedPageIndex * itemsPerPage;
    return allProduct.slice(startIndex, startIndex + itemsPerPage);
}

function renderPagination(allProduct) {
    const pagesCount = Math.ceil(allProduct.length / itemsPerPage);

    let html = '';
    for (let i = 0; i < pagesCount; i++) {
        html += `<button onclick="selectPage(${i})">${i + 1}</button>`
    }
    paginationPagesElement.innerHTML = html;
}

function selectPage(pageIndex) {
    selectedPageIndex = pageIndex;
    render();
}

function drawSelectedPage() {
    const selectedButton = paginationPagesElement.querySelector('button.selected');
    if (selectedButton) {
        selectedButton.classList.remove('selected');
    }
    paginationPagesElement.children[selectedPageIndex].classList.add('selected')
}
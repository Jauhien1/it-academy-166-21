const allBrands = [...new Set(data.map((element) => element.brand))];
const allEffectives = [...new Set(data.map((element) => element.effective))];
const brandsContainerElement = document.querySelector('#brandsContainer');
const effectiveContainerElement = document.querySelector('#effectiveContainer');
const selectedBrands = [];
const selectedEffectives = [];

function renderBrandsForm() {
    let html = '';
    for (let i = 0; i < allBrands.length; i++) {
        let brand = allBrands[i];
        html += `
        <label>
            <input type="checkbox" name="${brand}">
            ${brand}
        </label>`
    }
    brandsContainerElement.innerHTML = html;
}

function renderEffectiveForm() {
    let html = '';
    for (let i = 0; i < allEffectives.length; i++) {
        let effective = allEffectives[i];
        html += `
        <label>
            <input type="checkbox" name="${effective}">
            ${effective}
        </label>`
    }
    effectiveContainerElement.innerHTML = html;
}


function filterByBrands(allProducts) {
    const filtered = [];
    if (selectedBrands.length === 0) {
        return allProducts;
    }
    for (let product of allProducts) {
        if (selectedBrands.includes(product.brand)) {
            filtered.push(product)
        }
    }
    return filtered;
}

function filterByEffective(allProducts) {
    const filtered = [];
    if (selectedEffectives.length === 0) {
        return allProducts;
    }
    for (let product of allProducts) {
        if (selectedEffectives.includes(product.effective)) {
            filtered.push(product)
        }
    }
    return filtered;
}

function onBrandFormChange(event) {
    const input = event.target;
    if (input.checked) {
        selectedBrands.push(input.name)
    } else {
        const index = selectedBrands.indexOf(input.name)
        selectedBrands.splice(index, 1);
    }
    console.log(selectedBrands);
    render()
}

function onEffectiveFormChange(event) {
    const input = event.target;
    if (input.checked) {
        selectedEffectives.push(input.name)
    } else {
        const index = selectedEffectives.indexOf(input.name)
        selectedEffectives.splice(index, 1);
    }
    console.log(selectedEffectives);
    render()
}
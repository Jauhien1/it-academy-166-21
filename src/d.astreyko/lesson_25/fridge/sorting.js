let selectedSortType = 'priceAsc'


function onSortingChange(event) {
    selectedSortType = event.target.value;
    render();
}

function sort(products) {
    if (selectedSortType === 'priceAsc') {
        return products.sort((a, b) => a.price - b.price)
    }
    if (selectedSortType === 'priceDsc') {
        return products.sort((a, b) => b.price - a.price)
    }
    if (selectedSortType === 'nameAsc') {
        return products.sort((a, b) => {
            if (a.brand >= b.brand) {
                return 1
            }
            return -1;
        })
    }

    if (selectedSortType === 'nameDsc') {
        return products.sort((a, b) => {
            if (a.brand >= b.brand) {
                return -1
            }
            return 1;
        })
    }
    return products;
}
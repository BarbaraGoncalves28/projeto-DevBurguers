const buttonShowAll = document.querySelector('.buttonShowAll')
const buttonMapDiscount = document.querySelector('.buttonMapDiscount')
const buttonReduce = document.querySelector('.buttonReduce')
const buttonFilter = document.querySelector('.buttonFilter')
const list = document.querySelector('ul')


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', })
    return newValue
}

function showAll(productArray) {
    let myLi = ''
    productArray.forEach(product => {
        myLi +=
            `
                <li>
                    <img src="${product.src}">
                    <p>${product.name}</p>
                    <span>${formatCurrency(product.price)}</span>
                </li>
            `
    })
    list.innerHTML = myLi
}


function mapAll() {
    const newPrices = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9 // DAR 10% DE DESCONTO
    }))
    showAll(newPrices)
}

function reduceAll() {
    const reducePrices = menuOptions.reduce((acumulador, product) => acumulador + product.price, 0)

    list.innerHTML =
        `
        <li>
            <p>A soma total dos meus itens é: <br>${formatCurrency(reducePrices)}</p>
        </li>
    `
}

function filterAll() {
    const filterVegan = menuOptions.filter(product => {
        if (product.vegan === true) return true
    })
    showAll(filterVegan)
}
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapDiscount.addEventListener('click', mapAll)
buttonReduce.addEventListener('click', reduceAll)
buttonFilter.addEventListener('click', filterAll)








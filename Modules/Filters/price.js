import { getElement } from "../utils.js"
import displayProducts from "../displayProducts.js"


export const setupPrice = (store) => {

    const priceFilter = getElement(".price-filter")
    const priceValue = getElement(".price-filter-value")
    const productsContainer = getElement(".all-products")
    const filterError = getElement(".filter-error")

    let maxPrice = store.map(product => product.price)
    maxPrice = Math.max(...maxPrice)
    maxPrice = Math.ceil(maxPrice / 100)

    priceFilter.max = maxPrice
    priceFilter.value = maxPrice
    priceFilter.min = 0
    priceValue.textContent = `Value: $ ${maxPrice}`

    priceFilter.addEventListener("input", () => {
        const value = parseInt(priceFilter.value)
        priceValue.textContent = `Value: $ ${value}`
        let newStore = store.filter(product => product.price / 100 <= value)
        displayProducts(newStore, productsContainer, true)
        if(newStore.length === 0) {
            filterError.textContent = `Sorry, no Products matched your search`
        }
        else {
            filterError.textContent = null
        }
    })

}
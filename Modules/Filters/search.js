import { getElement } from "../utils.js"
import displayProducts from "../displayProducts.js"


export const setupSearch = (store) => {

    const searchForm = getElement(".search-form")
    const searchInput = getElement(".search-input")
    const productsContainer = getElement(".all-products")
    const filterError = getElement(".filter-error")

    searchForm.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase()
        if(value) {
            const newStore = store.filter(product => {
                let { name } = product
                name = name.toLowerCase()
                if(name.startsWith(value)) {
                    return product
                }
            })
            displayProducts(newStore, productsContainer, true)
            if(newStore.length === 0) {
                filterError.textContent = `Sorry, no Products matched your search`
            }
            else {
                filterError.textContent = null
            }
        }
        else {
            displayProducts(store, productsContainer, true)
        }
    })

}



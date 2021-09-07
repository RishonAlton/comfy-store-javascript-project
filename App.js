import "./Modules/toggleSidebar.js"
import "./Modules/Cart/toggleCart.js"
import "./Modules/Cart/setupCart.js"
import fetchProducts from "./Modules/fetchProducts.js"
import { setupStore, store } from "./Modules/store.js"
import { getElement } from "./Modules/utils.js"
import displayProducts from "./Modules/displayProducts.js"


const init = async () => {

    const products = await fetchProducts()

    if(products) {
        setupStore(products)
        const featured = store.filter(item => item.featured === true)
        displayProducts(featured, getElement(".featured-items"))
    }

}


window.addEventListener("DOMContentLoaded", init)



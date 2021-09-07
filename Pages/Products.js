import "../Modules/toggleSidebar.js"
import "../Modules/Cart/toggleCart.js"
import "../Modules/Cart/setupCart.js"
import "../Modules/Filters/toggleFilter.js"
import { store } from "../Modules/store.js"
import displayProducts from "../Modules/displayProducts.js"
import { getElement } from "../Modules/utils.js"
import { setupSearch } from "../Modules/Filters/search.js"
import { setupCompanies } from "../Modules/Filters/companies.js"
import { setupPrice } from "../Modules/Filters/price.js"

const pageLoading = getElement(".page-loading")


displayProducts(store, getElement(".all-products"))

setupSearch(store)
setupCompanies(store)
setupPrice(store)


pageLoading.style.display = "none"
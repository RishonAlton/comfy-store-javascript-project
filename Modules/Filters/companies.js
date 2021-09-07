import { getElement } from "../utils.js"
import displayProducts from "../displayProducts.js"
import { closeFilter } from "./toggleFilter.js"


export const setupCompanies = (store) => {

    let companies = ["all", ...new Set(store.map(product => product.company))]
    const companyButtons = getElement(".company-buttons")

    companyButtons.innerHTML = companies.map(company => `<button class="company-button">${company}</button>`).join(" ")

    companyButtons.addEventListener("click", (e) => {
        const element = e.target
        if(element.classList.contains("company-button")) {
            let newStore = []
            if(element.textContent === "all") {
                newStore = [...store]
            }
            else {
                newStore = store.filter(product => element.textContent === product.company)
            }
            displayProducts(newStore, getElement(".all-products"), true)
            closeFilter()
        }
    })

}
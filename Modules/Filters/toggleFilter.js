import { getElement } from "../utils.js"


const filterContainer = getElement(".filter-container")
const filter = getElement(".filters")
const filterButton = getElement(".filter-button")


filterButton.addEventListener("click", () => {

    filterContainer.classList.add("show-sidebar-filter")
    filter.classList.add("show-sidebar-filter")

})


filterContainer.addEventListener("click", (e) => {

    if(e.target.classList.contains("filter-container")) {
        filterContainer.classList.remove("show-sidebar-filter")
        filter.classList.remove("show-sidebar-filter")
    }

})


export const closeFilter = () => {

    filterContainer.classList.remove("show-sidebar-filter")
    filter.classList.remove("show-sidebar-filter")

}
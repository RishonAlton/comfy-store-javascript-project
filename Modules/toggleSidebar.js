import { getElement } from "./utils.js"


const hamburgerButton = getElement(".hamburger-button")
const sidebarContainer = getElement(".sidebar-container")
const closeSidebar = getElement(".close-sidebar")


hamburgerButton.addEventListener("click", () => {

    sidebarContainer.classList.add("show-sidebar")

})


closeSidebar.addEventListener("click", () => {

    sidebarContainer.classList.remove("show-sidebar")

})


sidebarContainer.addEventListener("click", (e) => {

    if(e.target.classList.contains("sidebar-container")) {
        sidebarContainer.classList.remove("show-sidebar")
    }

})
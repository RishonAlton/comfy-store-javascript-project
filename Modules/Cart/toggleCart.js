import { getElement } from "../utils.js"


const cartItemsContainer = getElement(".cart-items-container")
const cart = getElement(".cart")
const closeCart = getElement(".close-cart")
const openCartButton = getElement(".open-cart-button")


openCartButton.addEventListener("click", () => {

    cartItemsContainer.classList.add("show-cart")
    cart.classList.add("show-cart")

})


closeCart.addEventListener("click", () => {

    cartItemsContainer.classList.remove("show-cart")
    cart.classList.remove("show-cart")

})


cartItemsContainer.addEventListener("click", (e) => {

    if(e.target.classList.contains("cart-items-container")) {
        cartItemsContainer.classList.remove("show-cart")
        cart.classList.remove("show-cart")
    }

})


export const openCart = () => {

    cartItemsContainer.classList.add("show-cart")
    cart.classList.add("show-cart")

}





import { getElement } from "../utils.js"
import { formatPrice } from "../utils.js"


const cartItemsContainer = getElement(".cart-items")


const addToCartDOM = ({id, image, name, price, amount}) => {
    
    const cartItem = document.createElement("div")
    cartItem.classList.add("cart-item")
    cartItem.setAttribute("data-id", id)

    cartItem.innerHTML = (`
        <img src="${image}" class="cart-item-image" alt="${name}">
        <div class="cart-item-info">
            <h5 class="cart-item-name">${name}</h5>
            <span class="cart-item-price">${formatPrice(price)}</span>
            <button class="cart-remove-button" data-id="${id}">Remove</button>
        </div>
        <div class="change-quantity">
            <button class="increase-quantity" data-id="${id}">
                <i class="fas fa-chevron-up"></i>
            </button>
            <span class="item-quantity" data-id="${id}">${amount}</span>
            <button class="decrease-quantity" data-id="${id}">
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>
    `)

    cartItemsContainer.appendChild(cartItem)

}


export default addToCartDOM
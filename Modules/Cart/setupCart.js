import { openCart } from "./toggleCart.js"
import { getElement, getStorageItem, setStorageItem, formatPrice } from "../utils.js"
import { findProduct } from "../store.js"
import addToCartDOM from "./addToCartDOM.js"


const cartItemsContainer = getElement(".cart-items")
const cartCount = getElement(".cart-count")
const cartTotal = getElement(".cart-total")

let cart = getStorageItem("cart")


const increaseAmount = (id) => {

    let newAmount

    cart = cart.map(item => {
        if(item.id === id) {
            newAmount = item.amount + 1
            item = {...item, amount: newAmount}
        }
        return item
    })

    return newAmount

}


const decreaseAmount = (id) => {

    let newAmount

    cart = cart.map(item => {
        if(item.id === id) {
            newAmount = item.amount - 1
            item = {...item, amount: newAmount}
        }
        return item
    })

    return newAmount

}


const displayCartCount = () => {

    const count = cart.reduce((total, item) => {
        return total += item.amount
    }, 0)

    cartCount.textContent = count

}


const displayCartTotal = () => {

    const totalAmount = cart.reduce((total, item) => {
        return total += item.amount * item.price
    }, 0)

    cartTotal.textContent = `Total: ${formatPrice(totalAmount)}`

} 


export const addToCart = (id) => {

    let item = cart.find(cartItem => cartItem.id === id)

    if(!item) {
        let product = findProduct(id)
        product = {...product, amount: 1}
        cart = [...cart, product]
        addToCartDOM(product)
    }

    else {
        const amount = increaseAmount(id)
        const amountDOM = [...cartItemsContainer.querySelectorAll(".item-quantity")]
        const newAmount = amountDOM.find(item => item.dataset.id === id)
        newAmount.textContent = amount
    }

    displayCartCount()
    displayCartTotal()
    setStorageItem("cart", cart)
    openCart()

}


const displayCartItems = () => {

    cart.forEach(item => addToCartDOM(item))

} 


const removeItem = (id) => {

    cart = cart.filter(item => item.id !== id)

}


const setupCartFunctionality = () => {

    cartItemsContainer.addEventListener("click", (e) => {
        const element = e.target
        const parent = e.target.parentElement
        const elementID = element.dataset.id
        const parentID = parent.dataset.id
        if(element.classList.contains("cart-remove-button")) {
            removeItem(elementID)
            element.parentElement.parentElement.remove()
        }
        if(parent.classList.contains("increase-quantity")) {
            const newAmount = increaseAmount(parentID)
            parent.nextElementSibling.textContent = newAmount
        }
        if(parent.classList.contains("decrease-quantity")) {
            const newAmount = decreaseAmount(parentID)
            if(newAmount === 0) {
                removeItem(parentID)
                parent.parentElement.parentElement.remove()
            }
            else{
                parent.previousElementSibling.textContent = newAmount
            }
        }
        displayCartCount()
        displayCartTotal()
        setStorageItem("cart", cart)
    })

}


const init = () => {
    
    displayCartCount()
    displayCartTotal()
    displayCartItems()
    setupCartFunctionality()

}


init()
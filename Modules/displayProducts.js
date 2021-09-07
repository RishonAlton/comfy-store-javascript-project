import { formatPrice } from "./utils.js"
import { addToCart } from "./Cart/setupCart.js"


const displayProducts = (products, container, filters) => {

    container.innerHTML = products.map(product => {
        const {id, name, image, price} = product
        return (`
            <div class="product">
                <div class="item-image-container">
                    <img src="${image}" alt="${name}" class="product-image">
                    <div class="item-buttons">
                        <a href="./Product Info.html?id=${id}" class="search-button">
                            <i class="fas fa-search fa-fw"></i>
                        </a>
                        <button class="cart-button" data-id="${id}">
                            <i class="fas fa-shopping-cart fa-fw"></i>
                        </button>
                    </div>
                </div>
                <h5 class="item-name">${name}</h5>
                <h5 class="item-price">${formatPrice(price)}</h5>
            </div>
        `)
    }).join(" ")

    if(filters) return

    container.addEventListener("click", (e) => {
        const element = e.target
        const parent = e.target.parentElement
        if(parent.classList.contains("cart-button")) {
            addToCart(parent.dataset.id)
        }
        else if(element.classList.contains("cart-button")) {
            addToCart(element.dataset.id)
        }
        else return
    })

}


export default displayProducts
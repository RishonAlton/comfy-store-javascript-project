import "../Modules/toggleSidebar.js"
import "../Modules/Cart/toggleCart.js"
import "../Modules/Cart/setupCart.js"
import { productInfoURL, getElement, formatPrice } from "../Modules/utils.js"
import { addToCart } from "../Modules/Cart/setupCart.js"


const pageLoading = getElement(".page-loading")
const pageTitle = getElement("header h3")
const mainContainer = getElement(".product-info-container")
const productImage = getElement(".product-info-image")
const productName = getElement(".product-info-title")
const productCompany = getElement(".product-info-company")
const productPrice = getElement(".product-info-price")
const productColors = getElement(".product-colors")
const addToCartButton = getElement(".add-to-cart")

let productID


window.addEventListener("DOMContentLoaded", async () => {

    const urlID = window.location.search

    try {
        const response = await fetch(productInfoURL + urlID)
        if(response.status >= 200 && response.status <= 299) {
            const product = await response.json()
            const { id, fields } = product
            productID = id
            const { name, price, description, colors, company } = fields
            const image = fields.image[0].thumbnails.large.url
            document.title = `${name.toUpperCase()} | Comfy Store`
            pageTitle.textContent = `Home / ${name}`
            productImage.src = image
            productName.textContent = name
            productCompany.textContent = company
            productPrice.textContent = formatPrice(price)
            colors.forEach(color => {
                const span = document.createElement("span")
                span.classList.add("product-color")
                span.style.backgroundColor = color
                productColors.appendChild(span)
            })
        }
        else {
            console.log(response.status, response.statusText)
            mainContainer.innerHTML = (`
                <div class="error">
                    <h3>Sorry, something went wrong</h3>
                    <a href="../Index.html" class="button">Back Home</a>
                </div>
            `)
        }
    } 

    catch (error) {
        console.log(error)
    }

    pageLoading.style.display = "none"

})


addToCartButton.addEventListener("click", () => addToCart(productID))




const allProductsURL = "https://course-api.com/javascript-store-products"

const productInfoURL = "https://course-api.com/javascript-store-single-product"


const getElement = (selection) => {

    const element = document.querySelector(selection)

    if(element) {
        return element
    }

    else {
        throw new Error(`${selection} does not exist`)
    }

}


const getStorageItem = (name) => {

    let storageItem = localStorage.getItem(name)

    if(storageItem) {
        storageItem = JSON.parse(localStorage.getItem(name))
    }

    else {
        storageItem = []
    }

    return storageItem

}


const setStorageItem = (name, item) => {

    localStorage.setItem(name, JSON.stringify(item))

}


const formatPrice = (price) => {

    let formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format((price / 100).toFixed(2))

    return formattedPrice

}


export {

    allProductsURL,
    productInfoURL,
    getElement,
    getStorageItem,
    setStorageItem,
    formatPrice

}
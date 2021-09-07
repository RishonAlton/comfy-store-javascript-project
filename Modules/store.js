import { getStorageItem, setStorageItem } from "./utils.js"


let store = getStorageItem("store")


const setupStore = (products) => {

    store = products.map(product => {
        const {
            id,
            fields: { company, colors, featured, price, name, image: img} 
        } = product
        const image = img[0].thumbnails.large.url
        return {
            id,
            company,
            colors,
            featured,
            price,
            name,
            image
        }
    })

    setStorageItem("store", store)

}


const findProduct = (id) => {

    let product = store.find(item => item.id === id)

    return product

}


export {

    store,
    setupStore,
    findProduct

}
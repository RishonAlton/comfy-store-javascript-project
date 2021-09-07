import { allProductsURL } from "./utils.js"


const fetchProducts = async () => {

    const response = await fetch(allProductsURL).catch(error => console.log(error))

    if(response) {
        return response.json()
    }

    return response

}


export default fetchProducts
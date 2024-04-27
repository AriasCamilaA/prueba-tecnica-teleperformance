import axios from "axios";

const url = 'https://fakestoreapi.com/products/';

const productsService = {
    getProducts : async () => {
        try {
            const url_products = url;
            const response = await axios.get(url_products);
            const data = response.data;
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
        
    },
    getProductById : async (id) => {
        try {
            const url_products = url +id+"/";
            const response = await axios.get(url_products);
            const data = response.data;
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    
}

export default productsService;
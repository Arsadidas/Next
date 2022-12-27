import axios from "axios";
import product from "../components/Product/Product";

const api = 'https://fakestoreapi.com/products'

axios.defaults.baseURL = api

interface IRating {
    rate?: number
    count?: number
}

export interface IProduct {
    id?: number
    title?: string
    category?: string
    description?: string
    price?: number
    image?: string
    rating: IRating
}

export const DataService = {
    async getAll() {
        return await axios.get <IProduct[]>('https://fakestoreapi.com/products')
    },
    async addProductCart(product: IProduct) {
        return await axios.post<IProduct>('https://fakestoreapi.com/carts', product)
    },
}

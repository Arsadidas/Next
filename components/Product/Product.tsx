import React, {useState} from 'react';
import styles from "../../styles/product.module.scss";
import {DataService, IProduct} from "../../services/DataService";
import {useMutation, useQueryClient} from "react-query";
import noFavorite from "../../assets/noFavorite.svg";
import favorite from '../../assets/favorite.svg'
import ProductDescription from "./ProductDescription";

interface IProps {
    product: IProduct
}

const Product: React.FC<IProps> = ({product}) => {

    const queryClient = useQueryClient()

    const [inBasket, setInBasket] = useState<boolean>(false)

    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    const [favoriteArray, setFavoriteArray] = useState<IProduct[]>([])


    const {mutate} = useMutation('addProduct', (data: IProduct) => DataService.addProductCart(data), {
        onSuccess: () => queryClient.invalidateQueries('fetchProducts')
    })

    const handleAddInBasket = (id?: number) => {
        setInBasket(true)
        mutate(product)
    }

    const handleAddFavorite = (id?: number) => {
        const favoriteProduct = {
            id: product.id,
            title: product.title,
            category: product.category,
            description: product.description,
            price: product.price,
            image: product.image,
            rating: {
                rate: product.rating.rate,
                count: product.rating.count
            },
        }
        favoriteArray.push(favoriteProduct)
        localStorage.setItem('favoriteProducts', JSON.stringify(favoriteArray))
        setIsFavorite(true)
    }


    return (
        <div className={styles.item}>
            {product.rating.count! > 300 ?
                <div className={styles.hit}>
                    <a className={styles.button}>
                        <div>Хит</div>
                    </a>
                </div>
                : null}
            <ProductDescription product={product}/>
            <div className={styles.productActions}>
                <div className={inBasket ? styles.productInBasket : styles.productAddButton}>
                    <button
                        onClick={() => handleAddInBasket()}>{inBasket ? "В корзине" : "В корзину"} </button>
                </div>
                <div className={styles.productFavorite}>
                    <img style={{
                        "cursor": isFavorite ? 'not-allowed' : 'pointer',
                    }} onClick={() => handleAddFavorite()}
                         src={isFavorite ? favorite.src : noFavorite.src}
                         alt="asd"/>
                </div>
            </div>
        </div>
    );
};

export default Product;
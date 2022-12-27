import React from 'react';
import styles from "../../styles/product.module.scss";
import {IProduct} from "../../services/DataService";
import Image from "next/image";

interface IProps {
    product: IProduct
}

const ProductDescription: React.FC<IProps> = ({product}) => {

    return (
        <>
            <div className={styles.productImg}>
                <img src={product.image!} width={220} height={230} alt={'ars'}/>
            </div>
            <div className={styles.productCategory}>{product.category}</div>
            <div className={styles.productTitle}>{product.title}</div>
            <div
                className={styles.productPrice}>{Math.floor(product.price! * 70)}₽ <span>/шт.</span>
            </div>
        </>
    );
};

export default ProductDescription;
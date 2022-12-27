import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import {useQuery} from "react-query";
import {DataService, IProduct} from "../services/DataService";
import noFavorite from '../assets/noFavorite.svg'
import {useState} from "react";
import Product from "../components/Product/Product";
import AnotherInfo from "../components/AnotherInfo/AnotherInfo";

export default function Home() {

    const {data} = useQuery('fetchProducts', DataService.getAll)

    return (
        <>
            <Head>
                <title>Next Test</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.mainBlock}>
                <AnotherInfo/>
                {data?.data.map((product: IProduct) => {
                    return <Product product={product} key={product.id}/>
                })}
            </main>
        </>
    )
}

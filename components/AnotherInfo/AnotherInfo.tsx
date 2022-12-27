import React from 'react';
import styles from "../../styles/anotherInfo.module.scss";
import arrow from '../../assets/arrow.svg'
import first from '../../assets/first.png'
import second from '../../assets/second.png'
import Image from "next/image";
import FirstBanner from "./FirstBanner/FirstBanner";
import SecondBanner from "./SecondBanner/SecondBanner";

interface IProps {
    title?: string
}

const AnotherInfo: React.FC<IProps> = ({title = 'Всё для комфортной работы'}) => {
    return (
        <div className={styles.anotherInfo}>
            <div className={styles.anotherInfoBlock}>
                <div className={styles.anotherInfoTitle}>{title}</div>
                <div className={styles.anotherInfoArrow}>
                    <img width={40} height={16} src={arrow.src} alt={'asr'}/>
                </div>
                <FirstBanner/>
            </div>
            <SecondBanner/>
        </div>
    );
};

export default AnotherInfo;
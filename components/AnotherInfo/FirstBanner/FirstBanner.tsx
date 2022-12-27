import React from 'react';
import styles from "../../../styles/anotherInfo.module.scss";
import first from "../../../assets/first.png";

const FirstBanner = () => {

    return (
        <div className={styles.anotherInfoFirstBanner}>
            <div className={styles.anotherInfoFirstBannerPhoto}>
                <img src={first.src} alt="asr"/>
            </div>
            <a className={styles.anotherInfoFirstBannerButton}>
                <div>- 25%</div>
            </a>
            <div className={styles.anotherInfoFirstBannerSubText}>
                <div>
                    На товары <br/> для кабинета
                </div>
                <div className={styles.anotherInfoFirstBannerChoose}>Выбрать</div>
            </div>
        </div>
    );
};

export default FirstBanner;
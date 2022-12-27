import React from 'react';
import styles from "../../../styles/anotherInfo.module.scss";
import second from "../../../assets/second.png";

const SecondBanner = () => {

    return (
        <div className={styles.anotherInfoSecondBanner}>
            <a className={styles.anotherInfoSecondButton}>
                <div>- 25%</div>
            </a>
            <div className={styles.anotherInfoSubSecondText}>
                <div>
                    Скидка <br/>
                    на периферию
                    для компьютера
                </div>
                <div className={styles.anotherInfoSecondBannerChoose}>Выбрать</div>
            </div>
            <div className={styles.anotherInfoSecondBannerPhoto}>
                <img src={second.src} alt="asr"/>
            </div>
        </div>
    );
};

export default SecondBanner;
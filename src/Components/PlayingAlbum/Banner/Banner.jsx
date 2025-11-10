import styles from './Banner.module.css'
import lokahImg from './wp15786026-lokah-wallpapers.jpg'

export default function Banner(){


    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerHead}>
                <h2 className={styles.bBeading}>Lokah movie song</h2>
            </div>
            <div className={styles.bannerImage}>
                <img className={styles.bImg} src={lokahImg} alt="" />
            </div>

        </div>
    )
}
import styles from './RecentList.module.css'
import lokahPoster from './lokahposter.jpeg'
export default function RecentList(){


    return (
        <div className={styles.recentCardContainer}>
            <div className={styles.recentImageContainer}>
                <img className={styles.img} src={lokahPoster} alt="" />
            </div>
            <div className={styles.recentDetails}>
                <p className={styles.para}>Lokah Chapter 1: Chandra...</p>
            </div>

        </div>
    )
}
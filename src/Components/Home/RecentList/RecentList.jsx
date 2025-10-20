import styles from './RecentList.module.css'
export default function RecentList(){


    return (
        <div className={styles.recentCardContainer}>
            <div className={styles.recentImageContainer}>
                <img className={styles.img} src="src/Components/Home/RecentList/Welcome to the world of Lokah - chapter 1 Poster….jpeg" alt="" />
            </div>
            <div className={styles.recentDetails}>
                <p className={styles.para}>Lokah Chapter 1: Chandra...</p>
            </div>

        </div>
    )
}
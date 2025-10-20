import styles from './YearSongs.module.css'
export default function YearSongs(){

    return (
        
        <div className={styles.songsCardContainer}>
            <div className={styles.card}>
                <img className={styles.img} src="src/Components/Home/YearList/wp15786026-lokah-wallpapers.jpg" alt="" />
            </div>
            <div className={styles.cardDetails}>
                <p className={styles.para}>Lokah Chapter 1: Chandra . Jakes Bejoy </p>
            </div>


        </div>
    )
}   
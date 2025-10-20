import styles from './TrendingList.module.css'
export default function TrendingList() {

    return (
        <div style={{ width: "100%" }}>

            <div className={styles.trendinglistContainer}>

                <div className={styles.songCard}>

                    <div className={styles.songImage}>
                        <img src="src/Components/Home/TrendingList/just take a breath.jpeg" alt="" />
                    </div>

                    <div className={styles.songDetails}>
                        <h3 className={styles.songName}>Song name</h3>
                        <p className={styles.songCaption}>artist name - movie name</p>
                    </div>

                    <div className={styles.addButton}>

                        <img src="src/Components/Home/TrendingList/icons8-add-100 (1).png" alt="" className={styles.addImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}
import styles from './TrendingList.module.css'
import takeBreathImg from './justtakeabreath.jpeg'
export default function TrendingList() {

    return (
        <div style={{ width: "100%" }}>

            <div className={styles.trendinglistContainer}>

                <div className={styles.songCard}>

                    <div className={styles.songImage}>
                        <img src={takeBreathImg} alt="photo" />
                    </div>

                    <div className={styles.songDetails}>
                        <h3 className={styles.songName}>Song name</h3>
                        <p className={styles.songCaption}>artist name - movie name</p>
                    </div>

                    <div className={styles.addButton}>
                        <svg className={` bi bi-plus-circle`} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
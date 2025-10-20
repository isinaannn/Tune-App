import styles from './Header.module.css'
export default function Header(){


    return (
        <div className={styles.headerContainer}>
          <div className={styles.songContainer}>
            <p className={styles.song}>Song</p>
          </div>
          <div className={styles.podcastContainer}>
            <p className={styles.podcast}>Podcast</p>
          </div>
            <div className={styles.iconContainer}>
                <img className={styles.shuffleIcon} src="src/Components/Home/Header/shuffle_14506030.png" alt="" />
            </div>
        </div>
    )
}
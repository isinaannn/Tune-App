
import styles from './PlayerHeader.module.css';

const PlayerHeader = () => (

    <div className={styles.playerHeader}>
        <div className={styles.backIconContainer}>
            <svg
                className={`${styles.backIcon} bi bi-chevron-left`}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 16 16"
            >
                <defs>
                    <linearGradient id="blackToWhite" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="black" />
                        <stop offset="50%" stopColor="white" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#blackToWhite)"
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
            </svg>

        </div>
        <div className={styles.songCard}>
            <div className={styles.imgContainer}>
                <img src="src/Components/PlayingAlbum/Banner/wp15786026-lokah-wallpapers.jpg" alt="" />
            </div>
            <div className={styles.songDetails}>
                <h4 className={styles.heading}>Lokah movie song</h4>
                <p className={styles.para}>20 songs</p>
            </div>
        </div>

    </div>

);



export default PlayerHeader;

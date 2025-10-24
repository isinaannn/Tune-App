
import styles from './MusicBanner.module.css';

const MusicBanner = () => (
    <div>
        <div className={styles.musicBanner}>
            <div className={styles.blur1}>
            </div>
            <div className={styles.blur2}>
            </div>

            <div className={styles.banner}>
                <img className={styles.bannerImg} src="src/Components/MusicPlayer/MusicBanner/lokah.jpeg" alt="" />

            </div>
        </div>

          <div className={styles.musicDetails}>
            <h3>Thani lokah Murakkari</h3>
            <p>Jakes Bejoy. Jyoti Nooran .Lokah</p>
        </div>
    </div>
);



export default MusicBanner;

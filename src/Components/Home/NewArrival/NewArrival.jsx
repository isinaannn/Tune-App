import styles from './NewArrival.module.css'
import saiyaaraImg from './saiyyaarathumbnail.jpeg'

export default function NewArrival() {


    return (
        <>
            <div className={styles.newArrivalContainer}>
                <div className={styles.newArrivalCard}>
                <img className={styles.img} src={saiyaaraImg} alt="no image" />
                </div>
                <div className={styles.newArrivalDetails}>
                    <p className={styles.songTitle}>Saiyaara Title Song | Ahaan Panday, Aneet Padda | Tanishk Bagchi</p>

                </div>
            </div>
        </>
    )
}
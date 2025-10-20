import styles from './NewArrival.module.css'

export default function NewArrival() {


    return (
        <>
            <div className={styles.newArrivalContainer}>
                <div className={styles.newArrivalCard}>
                <img className={styles.img} src="src/Components/Home/NewArrival/saiyyaara-thumbnail.jpeg" alt="no image" />
                </div>
                <div className={styles.newArrivalDetails}>
                    <p className={styles.songTitle}>Saiyaara Title Song | Ahaan Panday, Aneet Padda | Tanishk Bagchi</p>

                </div>
            </div>
        </>
    )
}
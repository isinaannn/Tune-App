import styles from "./RecomendationList.module.css"
import image1 from './image1.jpeg'
import image2 from './image2.jpeg'
import image3 from './image3.jpeg'
import image4 from './image4.jpeg'

export default function RecommendationList(){


    return (
        <div className={styles.recommendation}>

            <div className={styles.recommendationBox}>
                <div className={`${styles.innerBox1} ${styles.innerBox}`}>
                    <img className={styles.img} src={image1} alt="" />
                </div>
                <div className={`${styles.innerBox2} ${styles.innerBox}`}>
                    <img className={styles.img} src={image2} alt="" />
                </div>
                <div className={`${styles.innerBox3} ${styles.innerBox}`}>
                    <img className={styles.img} src={image3} alt="" />
                </div>
                <div className={`${styles.innerBox4} ${styles.innerBox}`}>
                    <img className={styles.img} src={image4} alt="" />
                </div>
            </div>
            <div className={styles.recommendationDetails}>
                <p className={styles.para}>Ar Rahman .Harris jayaraj .Hiphop Tamizha</p>
            </div>
        </div>
    )
}
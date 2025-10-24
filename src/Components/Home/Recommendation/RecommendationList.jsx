import styles from "./RecomendationList.module.css"

export default function RecommendationList(){


    return (
        <div className={styles.recommendation}>

            <div className={styles.recommendationBox}>
                <div className={`${styles.innerBox1} ${styles.innerBox}`}>
                    <img className={styles.img} src="src/Components/Home/Recommendation/photoshop thumbnail editing poster music video….jpeg" alt="" />
                </div>
                <div className={`${styles.innerBox2} ${styles.innerBox}`}>
                    <img className={styles.img} src="src/Components/Home/Recommendation/9356e3fb-d5d5-4836-8132-bb0644f95a49.jpeg" alt="" />
                </div>
                <div className={`${styles.innerBox3} ${styles.innerBox}`}>
                    <img className={styles.img} src="src/Components/Home/Recommendation/e73d9161-54dc-4f48-a1b5-7e68ddd9afcb.jpeg" alt="" />
                </div>
                <div className={`${styles.innerBox4} ${styles.innerBox}`}>
                    <img className={styles.img} src="src/Components/Home/Recommendation/8735bd33-09bd-4407-aa4c-e2f3e0732681.jpeg" alt="" />
                </div>
            </div>
            <div className={styles.recommendationDetails}>
                <p className={styles.para}>Ar Rahman .Harris jayaraj .Hiphop Tamizha</p>
            </div>
        </div>
    )
}
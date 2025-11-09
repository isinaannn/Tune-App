import styles from './LibraryCard.module.css'

export default function LibraryCard({ name, caption, src, type, category }) {



    return (

        <>
            <div className={styles.libraryCard}>
                <div className={type == "artist" ? styles.artistImage : styles.libraryImage}>
                    <img className={styles.image} src={src} alt="" />
                </div>
                <div className={styles.libraryDetails}>
                    <h4 className={styles.libraryHead}>{name}</h4>
                    <p className={styles.libraryPara}>{caption}</p>
                </div>
                <div className={styles.libraryCategory}>
                    <p className={styles.category}>{category}</p>
                </div>

            </div>


        </>
    )

}
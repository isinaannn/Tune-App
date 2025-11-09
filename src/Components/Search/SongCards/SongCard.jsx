import styles from './SongCard.module.css'

export default function SongCard({ name ,children}) {
    console.log(name)

    return (

        <div className={styles.songCard}>
            <div className={styles.iconWrapper}>
          {children}
          </div>
            <h1 className={styles.name}>{name}</h1>
        </div>


    )
}
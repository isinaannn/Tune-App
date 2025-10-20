import styles from './SearchHeader.module.css'

export default function SearchHeader(){


    return (
        <div className={styles.searchHead}>
            <div className={styles.avatar}>

            </div>
            <div className={styles.searchHeading}>
                <h3>Search</h3>
            </div>
        </div>
    )
}
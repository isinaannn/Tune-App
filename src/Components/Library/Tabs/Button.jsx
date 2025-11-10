import styles from './Button.module.css'
export default function Button(props){


    return (
        <div style={{width: "100%"}}>
            <button className={styles.buttonTab}>{props.name}</button>
        </div>
    )
}
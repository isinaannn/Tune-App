import styles from './Buttons.module.css'

export default function Buttons() {


    return (
        <div className={styles.buttonsContainer}>
            <div className={styles.plusBtn}>
                <svg className={styles.plusIcon} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z" /></svg>

            </div>
            <div className={styles.shuffleBtn}>
                <svg className={styles.shuffleIcon} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="shuffle" x="0" y="0" version="1.1" viewBox="0 0 50 50">
                    <path d="M37.054 33.008a.998.998 0 0 0 1.415 0l2.525-2.522a.997.997 0 0 0 0-1.414l-2.525-2.523a1 1 0 1 0-1.415 1.414l.817.816H30.97l-1.877-1.874a.998.998 0 0 0-1.414.002.999.999 0 0 0 .001 1.414l2.17 2.166a1 1 0 0 0 .707.292h7.314l-.816.815a1 1 0 0 0-.001 1.414zM10.287 19.824h8.891l1.919 1.914a1 1 0 1 0 1.412-1.416l-2.211-2.206a1 1 0 0 0-.706-.292h-9.304a1 1 0 0 0-.001 2z"></path>
                    <path d="M10.287 30.778h9.404a1 1 0 0 0 .707-.293l10.673-10.661h6.799l-.816.814a1.001 1.001 0 0 0 1.414 1.415l2.525-2.521a1 1 0 0 0 0-1.415l-2.525-2.523a1 1 0 1 0-1.415 1.414l.817.816h-7.214a1 1 0 0 0-.707.293L19.277 28.778h-8.99a1 1 0 1 0 0 2z"></path>
                </svg>

            </div>
            <div className={styles.shareBtn}>
                <svg className={styles.shareIcon} fill='#FFFFFF' xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="512" height="512" id="share"
                    viewBox="0 0 512 512">
                    <path d="M448 248 288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z"></path>
                </svg>
            </div>
            <div className={styles.menuBtn}>
                <svg className={styles.menuIcon} fill='#FFFFFF' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="menu">
                    <path d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path>
                </svg>
            </div>
        </div>
    )
}
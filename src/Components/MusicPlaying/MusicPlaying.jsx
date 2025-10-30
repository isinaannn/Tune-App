import { Link, useNavigate } from 'react-router'
import styles from './MusicPlaying.module.css'

export default function MusicPlaying() {
            const navigate=useNavigate()

            const handleClick=()=>{
                navigate('/music-player')
            }


    return (
       
             <div onClick={handleClick} style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>
            
            <div className={styles.musicPlayingContainer}>
                <div className={styles.musicPlayingBar}>
                    <div className={styles.musicPlayingIcons}>
                        <svg className={`${styles.leftIcon} bi bi-chevron-left`} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg>

                        <svg className={`${styles.playIcon} bi bi-play-circle`} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                        </svg>

                        <svg className={`${styles.rightIcon} bi bi-chevron-right`} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>

                    </div>
                    <div className={styles.marquee}>
                        <marquee className={styles.songMarquee} behavior="" direction=""  width="140px">Lokah movie song- Thani lokah murakkari | Jakes bejoy</marquee>

                    </div>
                    <div className={styles.addBtn}>
                        <svg className={` bi bi-plus-circle`} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    
       
    )
}
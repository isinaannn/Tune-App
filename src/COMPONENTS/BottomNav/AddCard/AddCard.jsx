import React from 'react'
import styles from './AddCard.module.css'

export default function AddCard({children,name,detail}) {
  return (
       <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        {children}
                    </div>
                    <div className={styles.details} >
                        <h4 className={styles.heading}>{name}</h4>
                        <p className={styles.para} >{detail}</p>
                    </div>

                </div>
  )
}

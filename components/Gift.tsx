import React from 'react'
import styles from '../styles/gift.module.css'

function Gift() {
  return (
    <div className={styles.gift}>
      <div className={styles.giftHead}></div>
      <div className={styles.giftBody}></div>
      <div className={styles.giftTie}></div>
      <div className={styles.giftTieDetail}></div>
    </div>
  )
}

export default Gift

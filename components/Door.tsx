import styles from '../styles/door.module.css'

import React from 'react'

function Door(props:any) {
  const selectedDoor = props.selectedDoor ? styles.selectedDoor : ''
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        <div className={styles.door}>Door
          <div className={styles.numberDoor}>
            3
          </div>
          <div className={styles.doorHandle} />
        </div>
      </div>
      <div className={styles.floor} />
    </div>
  )
}

export default Door
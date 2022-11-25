import styles from '../styles/door.module.css'

import React from 'react'
import DoorModel from '../models/doorModel'

interface DoorProps{
  door: DoorModel
}

function Door(props:DoorProps) {
  const {door} = props
  const selectedDoor = door.selected ? styles.selectedDoor : ''
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        <div className={styles.door}>Door
          <div className={styles.numberDoor}>
            {door.number}
          </div>
          <div className={styles.doorHandle} />
        </div>
      </div>
      <div className={styles.floor} />
    </div>
  )
}

export default Door
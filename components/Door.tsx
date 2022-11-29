import styles from '../styles/door.module.css'

import React from 'react'
import DoorModel from '../models/doorModel'

interface DoorProps{
  value: DoorModel
  onChange: (newDoor: DoorModel ) => void
}

function Door(props:DoorProps) {
  const door = props.value
  const selectedDoor = door.selected ? styles.selectedDoor : ''

  const switchState = e => props.onChange(door.switchSelectedDoor())
  return (
    <div className={styles.area} onClick={switchState}>
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
import styles from '../styles/door.module.css'

import React from 'react'
import DoorModel from '../models/doorModel'

interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

function Door(props: DoorProps) {
  const door = props.value
  const selectedDoor = (door.selected && !door.isOpen) ? styles.selectedDoor : ''
  const switchDoorState = e => props.onChange(door.switchSelectedDoor())
  const openDoor = e => {
    e.stopPropagation()
    props.onChange(door.openDoor())
  }

  function doorRender() {
    return (
      <div className={styles.door}>Door
        <div className={styles.numberDoor}>
          {door.number}
        </div>
        <div className={styles.doorHandle} onClick={openDoor} />
      </div>
    )
  }


  return (
    <div className={styles.area} onClick={switchDoorState}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        {door.isOpen ? null : doorRender()}
      </div>
      <div className={styles.floor} />
    </div>
  )
}

export default Door
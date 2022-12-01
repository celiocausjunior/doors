import React from 'react'
import styles from '../styles/numberInput.module.css'

interface NumberInputProps{
    text: string
    value: number
    onChange: (newValue: number) => void
}

function NumberInput(props:NumberInputProps) {
    const dec = () => props.onChange(props.value -1 )
    const inc = () => props.onChange(props.value +1 )
  return (
    <div className={styles.main}>
        <span className={styles.text}>
            {props.text}
        </span>
        <span className={styles.value}>
            {props.value}
        </span>
        <div>
        <button className='btn btn-primary m-1' onClick={inc}>+</button>
        <button className='btn btn-danger m-1' onClick={dec}>-</button>
        </div>

    </div>
  )
}

export default NumberInput
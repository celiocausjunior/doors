import React from 'react'
import styles from '../styles/card.module.css'

interface CardProps{
    bgcolor?:string
    children?:any
}

function Card(props:CardProps) {
  return (
    <div 
    className={styles.card}
    style={{backgroundColor: props.bgcolor ?? "grey"}}
    >
    {props.children}
    </div>
  )
}

export default Card
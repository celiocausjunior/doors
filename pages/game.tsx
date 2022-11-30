import { useState } from "react"
import { createDoors, updateDoors } from "../functions/doors"
import Door from "../components/Door"
import styles from '../styles/game.module.css'
import Link from "next/link"

export default function Game() {

    const [doors, setDoors] = useState(createDoors(3, 2))

    function renderDoors() {
        return doors.map((door) => {
            return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        })
    }

    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {renderDoors()}
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button type="button" className="btn btn-danger">Reiniciar o jogo</button>
                </Link>
            </div>
        </div>
    )
}
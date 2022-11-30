import { useEffect, useState } from "react"
import { createDoors, updateDoors } from "../../../functions/doors"
import Door from "../../../components/Door"
import styles from '../../../styles/game.module.css'
import Link from "next/link"
import { useRouter } from "next/router"

export default function Game() {

    const router = useRouter()
    const [doors, setDoors] = useState(createDoors(0,0))

    
   

    useEffect(()=>{
        const doors =  router.query.doors ? +router.query.doors : 3
        const hasGift =  router.query.hasGift ? +router.query.hasGift : 2
        setDoors(createDoors(doors, hasGift))
    },[router?.query])

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

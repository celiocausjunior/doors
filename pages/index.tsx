import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Door from '../components/Door'
import Gift from '../components/Gift'
import DoorModel from '../models/doorModel'


export default function Home() {
  const [d1, setD1] = useState(new DoorModel(1))
  // const d2 = new DoorModel(2)
  return (
 <>
      <Head>
        <title>Doors</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{display: 'flex'}}>
    <Door door={d1} />
    {/* <Door door={d2}/> */}
      </div>
 </>
)
}

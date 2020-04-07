import React, { useState } from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  const [salt, setSalt] = useState('')
  const randomGen = () => {
    const d = Math.random()
    if (d < 0.8) {
      /* 80% */
      return 'R'
    } else if (d < 0.97) {
      /* 17% */
      return 'SR'
    } else {
      /* 3% */
      return 'SSR'
    }
  }
  const handleRandom = () => {
    const result = randomGen()
    setSalt(result)
  }
  return (
    <div className="container">
      <h1>SALTY EVE'S GACHAPON</h1>
      <button onClick={handleRandom}>Roll</button>
      <h2>Result : {salt}</h2>
    </div>
  )
}

export default Home

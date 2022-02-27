import React from 'react'
import { useHistory } from 'react-router-dom'

import './index.css'
import { MusicButton } from '@/components/music-button'

export default function Home() {
  const history = useHistory()
  const enterClick = () => {
    history.push('/list')
  }
  return (
    <div className="home">
      <div className="background"></div>
      <header></header>
      <article></article>
      <footer>
        <MusicButton
          onClick={enterClick}
          style={{ width: '10rem', height: '2.3rem', lineHeight: '2.3rem' }}
        >
          立即开启
        </MusicButton>
      </footer>
    </div>
  )
}

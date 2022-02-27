import React from 'react'
import { withRouter } from 'react-router-dom'

import './empty.less'
import { MusicButton } from '@/components/music-button'
import useEidt from '../hooks/useEidt'

export default withRouter(function Empty() {
  const [startClick] = useEidt()
  return (
    <div>
      <div className="tip">
        <div className="box"></div>
        <div>你还没有愿望哦</div>
        <MusicButton
          style={{ width: '9.4rem', height: '2rem', lineHeight: '2rem' }}
          onClick={startClick}
        >
          立即开启
        </MusicButton>
      </div>
    </div>
  )
})

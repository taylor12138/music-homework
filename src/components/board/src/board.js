import React, { useEffect, useState } from 'react'
import moment from '@/common/momentAdjust'

import './board.less'

export default function Board(props) {
  const [fromNowTime, setFromNowTime] = useState('')
  const { content, time } = props

  useEffect(() => {
    const timeTip = moment(time, 'YYYY-MM-DD HH:mm:ss').fromNow()
    setFromNowTime(timeTip)

    return () => {}
  }, [time])

  return (
    <div className="board">
      <div className="time">{fromNowTime}</div>
      <div className="text">{content}</div>
    </div>
  )
}

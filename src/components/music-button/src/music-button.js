import React from 'react'
import './music-button.less'

export default function MusicButton(props) {
  const title = props.children
  return (
    <div
      className="music-button"
      style={{ ...props.style }}
      onClick={props.onClick}
    >
      {title}
    </div>
  )
}

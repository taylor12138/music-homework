import React from 'react'
import './icon.less'

export default function Icon(props) {
  const { onClick } = props
  return <div className="icon" onClick={onClick}></div>
}

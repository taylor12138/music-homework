import React, { useState } from 'react'
import './index.less'
import { Input } from 'antd'
import { useHistory } from 'react-router-dom'
import { postDream } from '@/network'

const { TextArea } = Input
const limit = 140
export default function Index() {
  const [content, setContent] = useState('')
  const history = useHistory()
  const cancelClick = () => {
    history.push('/list')
  }
  const confirmClick = () => {
    postDream(content).then((res) => {
      console.log(res)
      history.push('/list')
    })
  }
  return (
    <div className="edit">
      <header className="header">
        <div onClick={cancelClick}>取消</div>
        <div onClick={confirmClick}>确定</div>
      </header>
      <article>
        <TextArea
          showCount
          maxLength={limit}
          style={{ height: 361 }}
          bordered={false}
          placeholder="将你的愿望说给云听"
          onChange={(e) => setContent(e.target.value)}
        />
      </article>
    </div>
  )
}

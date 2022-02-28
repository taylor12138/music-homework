import React, { useState } from 'react'
import './index.less'
import { Input } from 'antd'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { AddList } from '@/redux/list/Actions'

const { TextArea } = Input
const limit = 140
function Index(props) {
  const { AddList } = props
  const [content, setContent] = useState('')
  const history = useHistory()
  const cancelClick = () => {
    history.push('/list')
  }
  const confirmClick = () => {
    AddList(content)
    history.goBack()
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
const mapDispatchToProps = {
  AddList
}
export default connect(null, mapDispatchToProps)(Index)

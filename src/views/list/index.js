import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import './index.less'
import { Icon } from '@/components/icon'
import Empty from './empty/empty'
import DreamList from './dream-list/dream-list'
import { getList } from '@/network'

export default function List() {
  const [dreamList, setDreamList] = useState([])
  const history = useHistory()
  useEffect(() => {
    getList.then((res) => {
      console.log(res)
      const { data } = res
      setDreamList(data)
    })
    return () => {
      console.log('list 被销毁了！')
    }
  }, [])

  const back = () => {
    history.push('/home')
  }
  return (
    <div className="list">
      <header>
        <Icon onClick={back}></Icon>
        <div className="title">愿望清单</div>
      </header>
      <article>
        {dreamList.length > 0 ? <DreamList list={dreamList} /> : <Empty />}
      </article>
    </div>
  )
}

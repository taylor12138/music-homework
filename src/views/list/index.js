import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import './index.less'
import { Icon } from '@/components/icon'
import Empty from './empty/empty'
import DreamList from './dream-list/dream-list'
import { AsyncListChangeAction } from '@/redux/list/Actions'

function List(props) {
  const history = useHistory()
  const { AsyncListChangeAction, dreamList } = props
  console.log(props, 'list,props')
  useEffect(() => {
    AsyncListChangeAction()
    return () => {
      console.log('list 被销毁了！')
    }
  }, [AsyncListChangeAction])

  const back = () => {
    history.push('/home')
  }
  return (
    <div className="list">
      <header>
        <Icon onClick={back}></Icon>
        <div className="title">愿望清单</div>
      </header>
      <article>{dreamList.length > 0 ? <DreamList /> : <Empty />}</article>
    </div>
  )
}
function mapStateToProps(state) {
  return { dreamList: state.list }
}
const mapDispatchToProps = {
  AsyncListChangeAction
}
export default connect(mapStateToProps, mapDispatchToProps)(List)

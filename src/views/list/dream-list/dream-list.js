import React from 'react'
import { withRouter } from 'react-router-dom'
import { Timeline } from 'antd'

import './dream-list.less'
import useEidt from '../hooks/useEidt'
import { MusicButton } from '@/components/music-button'
import { Board } from '@/components/board'
import { connect } from 'react-redux'

function DreamList(props) {
  console.log(props)
  const [startClick] = useEidt()
  return (
    <div className="dream-list">
      <article>
        <Timeline>
          {props.dreamList.map((item) => {
            return (
              <Timeline.Item
                color="gray"
                dot={<div className="dot"></div>}
                key={item?._id}
              >
                <Board {...item} />
              </Timeline.Item>
            )
          })}
        </Timeline>
      </article>
      <footer>
        <MusicButton
          style={{ width: '9.4rem', height: '2rem', lineHeight: '2rem' }}
          onClick={startClick}
        >
          写下你的愿望
        </MusicButton>
      </footer>
    </div>
  )
}
function mapStateToProps(state) {
  return { dreamList: state.list }
}

export default connect(mapStateToProps)(withRouter(DreamList))

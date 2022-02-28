import moment from '@/common/momentAdjust'
export default function ListReducer(preState = { list: [] }, action) {
  const { type, payload } = action
  console.log('reducer里面的', payload)
  let newState = { ...preState }
  switch (type) {
    case 'changeList':
      newState.list = payload
      return newState
    case 'addList':
      const newData = {
        _id: payload,
        time: moment(Date.now()).format('YYYY/MM/DD HH:mm:ss'),
        content: payload
      }
      newState.list.push(newData)
      return newState
    default:
      return preState
  }
}

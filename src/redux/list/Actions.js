import { getList, postDream } from '@/network'
const ListChangeAction = (data) => {
  return {
    type: 'changeList',
    payload: data
  }
}
const AsyncListChangeAction = () => {
  return (dispatch) => {
    getList.then((res) => {
      console.log(res, '返回数据')
      const { data } = res
      dispatch(ListChangeAction(data))
    })
  }
}
const AddList = (data) => {
  postDream(data) //发送请求让数据库添加数据
  return {
    //本地再添加一次
    type: 'addList',
    payload: data
  }
}
export { ListChangeAction, AsyncListChangeAction, AddList }

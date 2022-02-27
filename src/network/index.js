import MYRequest from './src/request'
import { BASE_URL } from './src/config'
const myRequest = new MYRequest({
  baseURL: BASE_URL
})
export default myRequest
const getList = myRequest.get({
  url: '/list'
})
const postDream = function (content) {
  return myRequest.post({
    url: '/list',
    data: { content }
  })
}
export { getList, postDream }

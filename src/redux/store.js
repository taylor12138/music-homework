//store.js
//createStore专门用于创建store对象
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// 引入reducer
import ListReducer from './list/ListReducer'
// 暴露store
export default createStore(ListReducer, applyMiddleware(thunk))

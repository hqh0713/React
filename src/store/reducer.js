import { CHANGE_USER_ACCOUNT } from './type'
const defaultState = {
  userName: '' //登陆账号
}
export default (state = defaultState,action)=>{  //就是一个方法函数
  console.log(state, action)
    if(action.type === CHANGE_USER_ACCOUNT) {
      let newState = JSON.parse(JSON.stringify(state))
      newState.userName = action.value
      return newState
    }
    return state
}
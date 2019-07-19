const defaultState = {
  userName: 'we' //登陆账号
}
export default (state = defaultState,action)=>{  //就是一个方法函数
  console.log(state, action)
    if(action.type === 'changeUserAccount') {
      let newState = JSON.parse(JSON.stringify(state))
      newState.userName = action.value
      return newState
    }
    return state
}
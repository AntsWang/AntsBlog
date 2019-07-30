export function setPageTitle(data){
    return (dispatch,getState)=>{
  dispatch({
      type:'SET_TITLE',
      payload:"哈哈"
  })
    }
}

export function loginOut(){
  return (dispatch,getState)=>{
dispatch({
    type:'LOGIN_OUT',
    payload:"LOGIN_OUT"
})
  }
}
export function loginIn(){
  return (dispatch,getState)=>{
dispatch({
    type:'LOGIN_IN',
    payload:"LOGIN_IN"
})
  }
}
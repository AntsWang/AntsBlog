export function setPageTitle(data){
    return (dispatch,getState)=>{
  dispatch({
      type:'SET_TITLE',
      payload:"哈哈"
  })
    }
}
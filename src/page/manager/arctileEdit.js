import { Table,Divider,Button } from 'antd';
import React,{ Component } from 'react';
import Utils from '../../http/http';
import { BrowserRouter as Router, Route, Link,Redirect,Switch,withRouter,NavLink} from "react-router-dom";
import Moment from 'moment'
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
class List extends Component{
constructor(props){
    super(props)
    this.state = {
      list:[]

    }
}
componentDidMount(){
    this.getData();
}
getData(){
    console.log(1111);
    Utils.get(Utils.baseUrl+"/list",(data)=>{
                console.log(data);
                let datas = data.data||[];
                this.setState({
                  list:datas
                })
    },(err)=>{
console.log(err);
    });
  }

  renderItem(item,index){
    return <div style={{backgroundColor:"#ccc",marginTop:10,paddingBottom:10,borderRadius:10,paddingLeft:10,paddingRight:10}}>
      <div style={{fontSize:16,fontWeight:'bold'}}>{item.title}</div>
      <div style={{fontSize:12}}>{Moment(item.createTime).format('YYYY-MM-DD')}</div>
      <div>{item.summary}</div>
      <div>
      <Button onClick={()=>{this.props.history.push('/background/edit/'+item.id,{detail:item})}} style={{width:70,height:20,marginRight:10,fontSize:12}} type="primary">编辑</Button>
      <Button onClick={()=>this.props.showModal(item.id)} style={{width:70,height:20,fontSize:12}} type="primary">刪除</Button>
      </div>
    </div>

  }
    render(){
        return (
          <div style={{display:'flex',flexDirection:'column',flex:1,paddingLeft:10,paddingRight:10}}>
{
  this.state.list.map((item,index)=>{
    return this.renderItem(item,index)
  })
}
          </div>

        )
    }
}

export default withRouter(List)
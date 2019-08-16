import { Table,Divider } from 'antd';
import React,{ Component } from 'react';
import Utils from '../../http/http';
import { BrowserRouter as Router, Route, Link,Redirect,Switch,withRouter,NavLink} from "react-router-dom";
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

    }
    this.columns = [
        {
          title: '标题',
          dataIndex: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '时间',
          dataIndex: 'time',
        },
        {
          title: '类别',
          dataIndex: 'category',
        },
        {
          title: '摘要',
          dataIndex: 'summary',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
              <a onClick={()=>{this.props.history.push('/background/edit/'+text.id,{detail:text})}}>编辑</a>
              <Divider type="vertical" />
              <a onClick={()=>this.props.showModal(text.id)}>删除</a>
            </span>
          ),
        },
      ];
}
componentDidMount(){
    this.getData();
}
getData(){
    console.log(1111);
    Utils.get(Utils.baseUrl+"/list",(data)=>{
                console.log(data);
                let datas = data.data,list = [];
                for(let i = 0;i<datas.length;i++){
                    let obj = {
                            name:datas[i].title,
                            time:datas[i].createTime,
                            category:"类别",
                            summary:datas[i].summary,
                            id:datas[i].id,
                            content:datas[i].content
                    }
                    list.push(obj)

                }
                this.setState({
                  list:list
                })
    },(err)=>{
console.log(err);
    });
  }
    render(){
        return <Table bordered rowSelection={rowSelection} columns={this.columns} dataSource={this.state.list} />
    }
}

export default withRouter(List)
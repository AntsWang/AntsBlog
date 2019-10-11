import React,{Component} from "react" 
import './index.css';
import Utils from '../../http/http';
import Header from '../../components/header/header';
import  { Form, Icon, Input, Button, Checkbox,message } from "antd";
const { TextArea } = Input;
import { BrowserRouter as Router, Route, Link,Redirect,Switch,withRouter } from "react-router-dom";
import Moment from 'moment';
import Comment from '../../components/comment';
class Detail extends Component{
  constructor(props){
super(props)
this.state = {
  detail:''
}
this.pathname = ''
  }
  componentDidMount(){
    console.log(this.props.location.pathname);
    this.pathname = this.props.location.pathname;
    this.getData()
  }
  getData(){
    let that = this;
    Utils.get(Utils.baseUrl+this.pathname,function(res){
      console.log(res)
      message.info(res.message);
      if(res.flag=='SUCCESS'){
        that.setState({
          detail:res.data
        })
      }

    },function(err){
      console.log(err);
    })
  }
render(){
  let {title,summary,content,createTime} = this.state.detail;
    return (
    <div className="home-container">
            <Header/>
            <div className="container-detail">
                  <div style={{maxWidth:700}}>
                    <h3 style={{textAlign:"center",marginTop:20,marginBottom:10}}>{
                      title
                    }</h3>
                    <div style={{textAlign:'center',marginBottom:10}}>{Moment(createTime).format("YYYY-MM-DD HH:mm:ss")}</div>
                    <div className="detail" dangerouslySetInnerHTML={{ __html: content }}></div>
                  </div>
              </div>
              <Comment/>
    </div>)
}}

export default withRouter(Detail);

import React,{Component} from "react" 
import { Layout } from 'antd';
import './home.css';

import Header from '../../components/header/header';
import Content from '../../components/content/content';
import {setPageTitle} from '../../redux/action'
import Util from '../../http/http';

import {connect} from 'react-redux';

import Storage from '../../storage/index';

class Home extends Component{
  constructor(props){
  super(props);
  this.state = {
    list:[]
  }
  //this.getData = this.getData.bind(this);
  }
  componentDidMount(){
    console.log(this.props);
    console.log(Storage.get("lll"));
      this.getData();
  }
  getData(){
    console.log(1111);
    Util.get(Util.baseUrl+"/list",(data)=>{
                console.log(data);
                this.setState({
                  list:data.data||[]
                })
    },(err)=>{
console.log(err);
    });
  }
  render(){
      return (
        <div className="home-container">
          <Header/>
          <Content list = {this.state.list}/>
        </div>)
  }
}
const mapStateToProps = (state)=>{
  return {
   pageTitle:state.pageTitle.title
  }
}

const mapDispatchToProps = (dispatch,props)=>{
  return {
    setPageTitle(data){
       dispatch(setPageTitle(data))
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Home)

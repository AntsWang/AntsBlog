import React,{ Component } from "react";
import {Link} from 'react-router-dom';
import Carousel from '../carousel/index';
import Pagination from '../pagination/index';
import Moment from 'moment';
import './content.css'
export default class Content extends Component{
    renderItem(item,index){
        return (
            <div key = {index} className="article-item">
                <Link to={'/blog/p/'+item.id}><h2>{item.title}</h2></Link>
                <p>{item.summary}</p>
                <div>
                    <span>{Moment(item.createTime).format("YYYY-MM-DD HH:mm:ss")}</span>
                  
                </div>
            </div>
        )




    }
    render(){
        return(
            <div className="content">
               <Carousel/>
               <div className="split-line"></div>
               <div className="article">
                {
                   this.props.list&&this.props.list.length>0?this.props.list.map((item,index)=>{
                      return this.renderItem(item,index)
                   }):<div style={{textAlign:'center'}}>暂无数据</div>
                }
                </div>
                {/* <a className="more">
                    阅读更多
                </a> */}

            </div>
        )
    }
}

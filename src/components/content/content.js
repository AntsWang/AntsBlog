import React,{ Component } from "react";
import {Link} from 'react-router-dom';
import Carousel from '../carousel/index';
import Pagination from '../pagination/index';
import './content.css'
export default class Content extends Component{
    renderItem(item,index){
        return (
            <div key = {index} className="article-item">
                <Link to={'/p/'+item.id}><h2>回家的回家放寒假</h2></Link>
                <p>更好地规划规划法规和和规划法规</p>
                <div>
                    <span>2018-09-12</span>
                    <span>3</span>
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
                   [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}].map((item,index)=>{
                      return this.renderItem(item,index)
                   })
                }
                </div>
                <a className="more">
                    阅读更多
                </a>

            </div>
        )
    }
}

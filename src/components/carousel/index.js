import { Carousel } from 'antd';
import React,{ Component } from 'react';
import './index.css'
export default class Carousels extends Component{
render(){
    return(
        <Carousel effect="fade" autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    )
}
}
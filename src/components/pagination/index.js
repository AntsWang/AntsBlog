import { Pagination } from 'antd';
import { Component } from 'react';

export default class Paginations extends Component{
    render(){
        return(
            <Pagination defaultCurrent={6} total={500} />
        )
    }
}
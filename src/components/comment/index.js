import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './index.css';
const { TextArea } = Input;
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{display:'flex',justifyContent:'center'}}>
                <div className='commentContainer'>
                    <TextArea rows={4} />
                    <Button style={{ marginTop: 10 }} type="primary">发表评论</Button>
                </div>
            </div>


        );
    }
}

export default Comment;
/**
 * Created by ZJ on 2017/7/8.
 */
import React, { Component } from 'react'
import VideoSrc from './video/404.mp4'
import './ErrorContentComponent.css'
class ErrorContentComponent extends Component{

    render(){
        return (
            <div className="Error-content">
                <div className="lost-task-area">
                    <p>找不到该任务</p>
                    <h2>You look lost</h2>
                    <button className="back-button">回到首页</button>
                </div>
                <footer>
                    <p className="pull-right">
                    <a href="#top">回到顶部</a>
                    </p>
                    <p>&copy; 东软小团队</p>
                </footer>
                <div className="bg-video">
                <video src={ VideoSrc } autoPlay loop style={{width:"100%"}}></video>
                </div>
            </div>
        )
    }
}

export default ErrorContentComponent
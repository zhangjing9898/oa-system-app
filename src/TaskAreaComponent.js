import React,{ Component } from 'react'
import TeacherHeadImg from './img/teacher-head-img.png'
import Info from './img/info.png'
class TaskAreaComponent extends Component{
    render(){
        return (
            <div className="container summary">
                <div className="task-area-title">
                    <img className="info-img" src={Info} alt="infoImg"/>新任务发布啦~
                </div>
                <hr className="divider" />
                <div className="row">
                    <div className="col-md-3 task-area">
                        <img className="img-circle" src={TeacherHeadImg} alt="teacher-head-img" />
                        <h2>李德光老师</h2>
                        <div className="">
                            <p>学生：15级信息工程2班</p>
                            <p>作业：实验报告</p>
                        </div>
                        <p className="task-enter-btn">
                            <a className="btn btn-default"  role="button">点击进入</a>
                        </p>
                    </div>
                    <div className="col-md-3 task-area">
                        <img className="img-circle" src={TeacherHeadImg} alt="chrome" />
                        <h2>李德光老师</h2>
                        <div className="">
                            <p>学生：15级信息工程2班</p>
                            <p>作业：实验报告</p>
                        </div>
                        <p className="task-enter-btn">
                            <a className="btn btn-default"  role="button">点击进入</a>
                        </p>
                    </div>
                    <div className="col-md-3 task-area">
                        <img className="img-circle" src={TeacherHeadImg} alt="chrome" />
                        <h2>李德光老师</h2>
                        <div className="">
                            <p>学生：15级信息工程2班</p>
                            <p>作业：实验报告</p>
                        </div>
                        <p className="task-enter-btn">
                            <a className="btn btn-default" role="button">点击进入</a>
                        </p>
                    </div>
                    <div className="col-md-3 task-area">
                        <img className="img-circle" src={TeacherHeadImg} alt="chrome" />
                        <h2>李德光老师</h2>
                        <div className="">
                            <p>学生：15级信息工程2班</p>
                            <p>作业：实验报告</p>
                        </div>
                        <p className="task-enter-btn">
                            <a className="btn btn-default"  role="button">点击进入</a>
                        </p>
                    </div>
                </div>
                <hr className="divider" />
            </div>
        )
    }
}

export default TaskAreaComponent
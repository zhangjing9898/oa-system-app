/**
 * Created by ZJ on 2017/7/4.
 */
import React,{ Component } from 'react'
import FooterComponent from "./FooterComponent";
import LoginBackground from './img/loginBackground.jpg'
import { HashRouter, Route,Link } from 'react-keeper'
class LoginContentComponent extends Component{
    render(){
        return (
            <div className="top-content">
                <div className="inner-bg">
                    <div className="container">
                        <div className="row login-title">
                            <div className="col-sm-8 col-sm-offset-2 text">
                                <h1><strong>OASYSTEM    </strong>登录页面</h1>
                                <div className="description">
                                    <p>
                                        这是基于学生端的登录页面
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3 form-box">
                                <div className="form-top">
                                    <div className="form-top-left">
                                        <h3>登录</h3>
                                        <p>请输入您的用户名和密码登录</p>
                                    </div>
                                    <div className="form-top-right">
                                        <i className="fa fa-key"></i>
                                    </div>
                                </div>
                                <div className="form-bottom">
                                    <form role="form" action="" method="post" className="login-form">
                                        <div className="form-group">
                                            <label className="sr-only" for="form-username">用户名</label>
                                            <input type="text" name="form-username" placeholder="请输入用户名..." className="form-username form-control" id="form-username" />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" for="form-password">密码</label>
                                            <input type="password" name="form-password" placeholder="请输入您的密码..." className="form-password form-control" id="form-password" />
                                        </div>
                                        <Link to="/search">
                                            <button className="btn">
                                               登录
                                            </button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}

export default LoginContentComponent
import React,{ Component } from 'react'
import FooterComponent from "./FooterComponent";
import LoginBackground from './img/loginBackground.jpg'
class RegisterComponent extends Component{
    render(){
        return (
            <div className="top-content" style={{backgroundImage:`url(${LoginBackground})`}}>
                <div className="inner-bg">
                    <div className="container">
                        <div className="row login-title">
                            <div className="col-sm-8 col-sm-offset-2 text">
                                <h1><strong>OASYSTEM    </strong>注册页面</h1>
                                <div className="description">
                                    <p>
                                        这是基于学生端的注册页面
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3 form-box">
                                <div className="form-top">
                                    <div className="form-top-left">
                                        <h3>注册</h3>
                                        <p>请输入您的用户名和密码注册</p>
                                    </div>
                                    <div className="form-top-right">
                                        <i className="fa fa-key"></i>
                                    </div>
                                </div>
                                <div className="form-bottom">
                                    <form action="" method="post" className="login-form">
                                        <div className="form-group">
                                            <label className="sr-only" for="form-username">用户名</label>
                                            <input type="text" name="form-username" placeholder="请输入用户名..." className="form-username form-control" id="form-username" />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" for="form-password">密码</label>
                                            <input type="password" name="form-password" placeholder="请输入您的密码..." className="form-password form-control" id="form-password" />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only" for="form-password">密码</label>
                                            <input type="password" name="form-password" placeholder="请再次输入您的密码..." className="form-password form-control" id="form-password" />
                                        </div>
                                        <button type="submit" className="btn">注册</button>
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

export default RegisterComponent

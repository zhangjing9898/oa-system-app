import React,{ Component }from 'react'

class HeaderComponent extends Component{

    render(){
        return (
            <div className="navbar navbar-inverse navbar-fixed-top" role="navigation" id="menu-nav">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">切换导航</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">OA系统</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <div className="row">
                            <div className="col-lg-6 header-search">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..." />
									<span className="input-group-btn">
       									 <button className="btn btn-default" type="button">Go!</button>
      								</span>
                                </div>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="">
                                    <a href="#ad-carousel">官网详情</a>
                                </li>
                                <li>
                                    <a href="#summary-container">简述</a>
                                </li>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#about-modal">登录</a>
                                </li>
                                <li>
                                    <a>注册</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderComponent
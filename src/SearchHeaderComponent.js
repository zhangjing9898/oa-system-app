import React,{ Component } from 'react'

class SearchHeaderComponent extends Component{

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
                        <a className="navbar-brand" >OA系统</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <div className="user-info">
                            <ol className="breadcrumb">
                                <li className="active">
                                    <a >User（185分）</a>
                                </li>
                                <li>
                                    <a >论坛</a>
                                </li>
                                <li>
                                    <a >消息</a>
                                </li>
                                <li>
                                    <a >退出</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchHeaderComponent
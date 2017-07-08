import React,{ Component } from 'react'
import { Link } from 'react-keeper'

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
                        <Link className="navbar-brand" to="/main">OA系统</Link>
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
                                    <Link to="/search">
                                        <a >退出</a>
                                    </Link>
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
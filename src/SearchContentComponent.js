import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
class SearchContentComponent extends Component{

    render(){
        return (
            <div className="search-content">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="input-group">
                            <input type="text" className="form-control" aria-label="..."/>
                                <div className="input-group-btn">
                                    <button className="btn btn-success">查询</button>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 add-teacher">
                        我的老师：
                        未添加
                        [+]
                    </div>
                </div>
                <div className="history-task-record">
                    <p className="title">历史任务:</p>
                    <table className="table table-hover" style={{ border: 1 }} cellSpacing="0">
                        <tr>
                            <th>任务ID</th>
                            <th>任务标题</th>
                            <th>任务形式</th>
                            <th>提交时间</th>
                            <th>截止日期</th>
                            <th>成绩</th>
                            <th>提交次数</th>
                            <th>操作</th>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                        <tr>
                            <td>任务1</td>
                            <td>XXXLinux服务器管理与配置</td>
                            <td>word文档</td>
                            <td>2017-5-23</td>
                            <td>2017-6-10</td>
                            <td>68</td>
                            <td>3</td>
                            <td>查看 | 完善 | 删除</td>
                        </tr>
                    </table>
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="disabled">
                                <a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
                            </li>
                            <li className="active">
                                <a href="#">1 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="">
                                <a href="#">2 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="">
                                <a href="#">3<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="">
                                <a href="#">4 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="">
                                <a href="#">5<span className="sr-only">(current)</span></a>
                            </li>
                            <li>
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <hr className="divider task-divider" />
            </div>
        )
    }
}

export default SearchContentComponent

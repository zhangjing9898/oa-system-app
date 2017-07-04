import React,{ Component } from 'react'
import SlideShow1 from './img/slideShow1.jpg'
import SlideShow2 from './img/slideShow2.jpg'
import SlideShow3 from './img/slideShow3.jpg'
import SlideShow4 from './img/slideShow4.jpg'
class SlideShowComponent extends Component{

    render(){
        return (
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src={SlideShow1}/>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>计科系</h1>
                                    <p>计算机科学与技术系</p>
                                    <p>
                                        <a className="btn btn-lg btn-success" href="http://www.apple.com/cn/safari/" target="_blank" role="button">点我了解</a>
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="item">
                        <img src={SlideShow2} alt="2" />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>信管系</h1>
                                    <p>信息管理系</p>
                                    <p>
                                        <a className="btn btn-lg btn-success" href="http://www.apple.com/cn/safari/" target="_blank" role="button">点我了解</a>
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="item">
                        <img src={SlideShow3} alt="3" />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>数艺系</h1>
                                    <p>数字艺术系</p>
                                    <p>
                                        <a className="btn btn-lg btn-success" href="http://www.apple.com/cn/safari/" target="_blank" role="button">点我了解</a>
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="item">
                        <img src={SlideShow4} alt="4" />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>外语系</h1>
                                    <p>应用外语系</p>
                                    <p>
                                        <a className="btn btn-lg btn-success" href="http://www.apple.com/cn/safari/" target="_blank" role="button">点我了解</a>
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default SlideShowComponent
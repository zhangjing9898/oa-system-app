import React,{ Component } from 'react'

class FooterComponent extends Component{
    render(){
        return (
            <div className="container summary">
                <footer>
                    <p className="pull-right">
                        <a href="#top">回到顶部</a>
                    </p>
                    <p className="pull-left">&copy; 东软小团队</p>
                </footer>
            </div>
        )
    }
}

export default FooterComponent

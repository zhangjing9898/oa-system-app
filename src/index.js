import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import Login from './Login'
import { HashRouter, Route,Link } from 'react-keeper'
import Register from "./Register";
import Search from "./Search";
import App from "./App";

class All extends Component{
    render(){
        return (
            <HashRouter>
                <div>

                    <Route component={ Main } path={"/main"}/>
                    <Route component={ Login } path={"/login"}/>
                    <Route component={ Register } path={"/register"}/>
                    <Route component={ Search } path={"/search"}/>
                </div>

            </HashRouter>
        )
    }
}

ReactDOM.render(
    <All/>,
    document.getElementById('root')
);




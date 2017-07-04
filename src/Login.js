import React,{ Component } from 'react'
import './main.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './Login.css'
import './LoginFormElement.css'
import HeaderComponent from "./HeaderComponent";
import LoginContentComponent from "./LoginContentComponent";

class Login extends Component{

    render(){
        return (
            <div style={{height:'775px'}}>
                <HeaderComponent/>
                <LoginContentComponent/>
            </div>
        )
    }
}

export default Login

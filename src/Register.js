import React,{ Component } from 'react'
import RegisterComponent from "./RegisterComponent";
import './main.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './Login.css'
import './LoginFormElement.css'
import HeaderComponent from "./HeaderComponent";;


class Register extends Component{

    render(){
        return (
            <div className="register" style={{height:'775px'}}>
                <HeaderComponent/>
                <RegisterComponent/>
            </div>
        )
    }
}

export default Register


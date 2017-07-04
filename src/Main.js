import React,{ Component } from 'react'
import './main.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import HeaderComponent from "./HeaderComponent";
import SlideShowComponent from "./SlideShowComponent";
import FooterComponent from "./FooterComponent";
import TaskAreaComponent from "./TaskAreaComponent";


class Main extends Component{

    render(){
        return (
            <div>
                <HeaderComponent/>
                <SlideShowComponent/>
                <TaskAreaComponent/>
                <FooterComponent/>
            </div>
        )
    }
}

export default Main
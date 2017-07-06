import React,{ Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import './Search.css'
import SearchHeaderComponent from "./SearchHeaderComponent";
import SearchContentComponent from "./SearchContentComponent";
import FooterComponent from "./FooterComponent";

class Search extends Component{

    render(){
        return (
            <div>
                <SearchHeaderComponent/>
                <SearchContentComponent/>
                <FooterComponent/>
            </div>
        )
    }

}

export default Search
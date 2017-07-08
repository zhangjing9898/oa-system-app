/**
 * Created by ZJ on 2017/7/8.
 */
import React,{ Component } from 'react'
import SearchHeaderComponent from "./SearchHeaderComponent";
import ErrorContentComponent from './ErrorContentComponent'
class Error extends Component{

    render(){
        return (
            <div>
                <SearchHeaderComponent/>
                <ErrorContentComponent/>
            </div>
        )
    }
}

export default Error
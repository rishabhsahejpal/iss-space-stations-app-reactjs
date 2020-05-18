import React, { Component } from 'react'
import Header from './Header'
import Loader from './Loader'
import LocationInfo from './LocationInfo'

export class MainContent extends Component{

    render() {
    	if(!this.props.loader){
	        return (
	             <div className="content-display row col-11 col-lg-6">
	             	<Header handleClick={this.props.handleClick}/>
	             	<LocationInfo data={this.props.data}/>
	            </div>
	        )
    	}else{
    		return (
	             <div className="content-display row col-11 col-lg-6">
	             	<Loader />
	            </div>
	        )
    	}
    	// console.log(this.props.data)
    }
}

export default MainContent

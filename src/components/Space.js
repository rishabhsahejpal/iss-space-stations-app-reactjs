import React, { Component } from 'react'
import axios from 'axios'
import BackgroundImage from './BackgroundImage'
import MainContent from './MainContent'
import NavBar from './NavBar'

// Openotify api does not support Https connection
// http://api.open-notify.org/iss-now.json

export class Space extends Component {
    state = {
        loader: false
    }
    //Let the component render fully and then search
    componentDidMount(){

    }

    handleButtonClick(){
        const context = this;
        //Show loader right away
        this.setState({loader: true})
       //Run this call in timeout
       setTimeout(_=>{
            context.getInfo();
       },2500);
    }

    getInfo = ()=>{
        const REACT_APP_ISS_URL = "https://api.wheretheiss.at/v1/satellites/25544"
        const REACT_APP_LOCURL = "https://api.opencagedata.com/geocode/v1/json?"
        const REACT_APP_APIKEY = "9420a4fdb2ad41af8ac2890fa31f8c8c" 
        
         //1st call
        axios.get(REACT_APP_ISS_URL)
        .then(res => {
           // run a call to get the location info
            let locURI = `${REACT_APP_LOCURL}q=${res.data.latitude}+${res.data.longitude}&key=${REACT_APP_APIKEY}`
            this.setState({
                lat : res.data.latitude.toFixed(3),
                lon : res.data.longitude.toFixed(3),
            });
            //2nd call
            axios.get(locURI).then(res=>{
                this.setState({
                    country: (res.data.results[0].components.country !== undefined)? res.data.results[0].components.country : 'empty',
                    continent: (res.data.results[0].components.continent !== undefined)? res.data.results[0].components.continent : 'empty',
                    category: res.data.results[0].components._category,
                    formatted: res.data.results[0].formatted,
                    flag: (res.data.results[0].annotations.flag !== undefined) ? res.data.results[0].annotations.flag.toString() : 'empty' ,
                    //Chnage the loader on the final call results
                    loader: false
                })
            }).catch(err=>console.log('Error',err))

        })
        .catch(err=>console.log('Error', err))
    }

    render() {
        return (
            <div className="content-wrapper">
                <NavBar active={{home: ' active', doc: '' , res: ''}}/>
                <BackgroundImage />
                <MainContent loader={this.state.loader} handleClick={this.handleButtonClick.bind(this)} data={this.state}/>      
            </div>
        )
    }
}

export default Space

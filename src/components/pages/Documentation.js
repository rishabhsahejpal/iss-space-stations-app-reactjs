import React, { Component } from 'react'
import BackgroundImage from '../BackgroundImage'
import NavBar from '../NavBar'


export class Documentation extends Component{

    render() {
        return (
			<div className="content-wrapper">
                <NavBar active={{home: '', doc: ' active' , res: ''}} />
                <BackgroundImage />
                <div className="content-display col-11 col-md-6">
                    <div className="documentation">
                        <h1>Documentation (<span>v</span>1.0.0)</h1>
                        <p>The application is created to find the current location of the Internation Space Station
                        (also <a href="https://en.wikipedia.org/wiki/International_Space_Station">I.S.S</a>).
                        This application pinpoints the location of ISS, whether it is over a country, continent or 
                        over any water body. The latitude and longitude are returned, which are displayed on the interface of the application</p>
                        <p>If the ISS is over any country, the flag of the country is also displayed. There is also a "Find out more" link provided which connects you directly to the wikipedia page of the location, be it Indian Ocean or Australia or Nambia. 
                        You can use that link to read more about the location and learn about its culture.</p>
                        <p>The application uses various apis from the 'where the ISS at' website, opencage website and country flag-api 
                        website, which can be viewd on the resources page <a href="/resources">here</a>. The information is updated 
                        periodically which can be observed by clicking on the "Lets Find Out" button after intervals.</p>
                        <p>Below are the steps to use the application.</p>
                        <ul>
                            <li>1. Locate the "Lets Find Out" button</li>
                            <li>2. Click on the "Lets Find Out" button</li>
                            <li>3. Results will be displayed including Latitudes, Longitudes and a "Find out more" button</li>
                            <li>4. Enjoy</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Documentation

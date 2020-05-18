import React, { Component } from 'react'
import BackgroundImage from '../BackgroundImage'
import NavBar from '../NavBar'


export class Resources extends Component{

    handleClick = (e)=>{
        e.preventDefault();
        this.props.handleClick();
    }

    render() {
        return (
			<div className="content-wrapper">
                <NavBar active={{home: '', doc: '' , res: ' active'}}/>
                <BackgroundImage />
                <div className="content-display col-11 col-md-6">
                    <div className="resources">
                        <h1>Resources</h1>
                        <p>The following resources were utilised for creating this application:</p>
                        <ul>
                            <li>
                                <i className="fas fa-minus"></i> <span>Bootstrap</span><a href="https://getbootstrap.com/docs/4.4/getting-started/introduction/">Bootstrap<i className="fas fa-angle-double-right"></i></a>
                            </li>
                            <li>
                                <i className="fas fa-minus"></i> <span>Fontsawesome</span><a href="https://fontawesome.com/">Fonts-awesome<i className="fas fa-angle-double-right"></i></a>
                            </li>
                            <li>
                                <i className="fas fa-minus"></i> <span>'Where the ISS at?' API</span><a href="https://wheretheiss.at/w/developer">API<i className="fas fa-angle-double-right"></i></a>
                            </li>
                            <li>
                                <i className="fas fa-minus"></i> <span>Open Notify API</span><a href="http://open-notify.org/Open-Notify-API/ISS-Location-Now/">API<i className="fas fa-angle-double-right"></i></a>
                            </li>
                            <li>
                                <i className="fas fa-minus"></i> <span>Country Flag API</span><a href="https://www.countryflags.io/">API<i className="fas fa-angle-double-right"></i></a>
                            </li>
                            <li>
                                <i className="fas fa-minus"></i> <span>Google Font - Anton</span><a href="https://fonts.google.com/specimen/Anton">Font<i className="fas fa-angle-double-right"></i></a>
                            </li>
                            <li>
                                <i className="fas fa-minus"></i> <span>Google Font - Oswald</span><a href="https://fonts.google.com/specimen/Oswald">Font<i className="fas fa-angle-double-right"></i></a>
                            </li>
                            <li>
                                <i className="fas fa-minus"></i> <span>Application Background Image</span><a href="https://commons.wikimedia.org/wiki/File:World_blank_map_(grey_&_white).png">Link<i className="fas fa-angle-double-right"></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resources

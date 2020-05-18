import React, { Component } from 'react'

export class Header extends Component{

    handleClick = (e)=>{
        e.preventDefault();
        this.props.handleClick();
    }

    render() {
        return (
            <React.Fragment>
               <h1 className="col-12">Where is the International Space Station right now?<i className="fab fa-grav"></i><br/>
                <span className="smaller">*Also known as: I.S.S - </span>
                <a href="https://en.wikipedia.org/wiki/International_Space_Station">Read more</a></h1>
                <button onClick={this.handleClick}>lets find out<i className="fas fa-search-location"></i></button>
            </React.Fragment>
        )
    }
}

export default Header

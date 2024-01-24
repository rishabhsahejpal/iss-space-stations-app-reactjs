import React, { Component } from 'react'

export class LocationInfo extends Component{ 
	state = {
		showCountry : (this.props.data.country !== 'empty' && this.props.data.country !== undefined ) ? true : false,
		inital : (this.props.data.lat !== undefined ) ? '' : <i className="fab fa-grav"></i>
	}

	getWikiLink = ()=>{
		if(this.props.data.country !== 'empty' && this.props.data.country !== undefined  ){
			const text = this.props.data.country.replace(' ', '_');
			return `https://en.wikipedia.org/wiki/${text}`
		}else{
				if(this.props.data.formatted !== undefined ){
					const text = this.props.data.formatted.replace(' ', '_');
					return `https://en.wikipedia.org/wiki/${text}`
				}
		}
		
	}

	/*https://www.countryflags.com/${this.props.data.flag}/flat/32.png - OLD website, DOESN'T WORK ANYMORE */

	getFlag = () => {
		if(this.props.data.flag !== undefined && this.props.data.flag !== 'empty' )
			return this.props.data.flag.toUpperCase();
	}

	/* Get country code string, IN, USA etc from 🇺🇸*/
	// getUTFFromUnicode = (charPosUnicode) => 65 + (charPosUnicode - 127462) //Add to string A, String A position - 65, Unicode 🇦 Position - 127462  
	// getCountryCodeCharacter = (charUnicode) => String.fromCodePoint(this.getUTFFromUnicode(charUnicode)) // Get string from the unicode number
	// getCountryCodeString = (flag) => this.getCountryCodeCharacter(flag.codePointAt(0)) + this.getCountryCodeCharacter(flag.codePointAt(2))

	/*Single line code using map*/
	getCountryCodeStringAll = (flag) => String.fromCodePoint(...[...flag].map( char => 65 + (char.codePointAt(0) - 127462 ) ) )
	
    render() {
        // console.log("check if it's still working", this.state)
    	const wikiLink = this.getWikiLink();
    	const showCountry = (this.state.showCountry) ? 'show' : 'hide';
    	const showWater = (this.state.showCountry) ? 'hide' : 'show';
    	const flag = this.getFlag()!== undefined ? this.getFlag(): '';
    	const flagSrc = flag !== '' ? `https://flagsapi.com/${this.getCountryCodeStringAll(flag)}/flat/32.png` : '';

        return (
			<div className="location-info col-12 row no-gutters">
			    <h3 className="col-12">Location of ISS <i className="fas fa-rocket"></i></h3>
			    <div className='col-12 col-md-6 row no-gutters'>
			        <p className="col-5">
			            <i className="fas fa-globe"></i>Latitude:
			        </p>
			        <p className='col-7'>{this.props.data.lat}{this.state.inital}  &#176;N</p>
			    </div>
			    <div className='col-12 col-md-6 row no-gutters'> 
			        <p className="col-5">
			            <i className="fas fa-globe"></i>Longitude:
			        </p>
			        <p className='col-7'>{this.props.data.lon}{this.state.inital}  &#176;E</p>
			    </div>
			    <div className='col-12 country'> 
			        <i className="fas fa-map-marker-alt"></i>
			        <div className={`flag ${showCountry}`}>
			        	<img alt="Flag" src={flagSrc}></img>
					</div>
			        <p className={`country-name ${showCountry}`}>{this.props.data.country}</p>
			        <p className={`water-body-name ${showWater}`}><i className="fas fa-water"></i>{this.props.data.formatted}{this.state.inital}</p>
			        <a href={wikiLink}>Find More about {this.props.data.formatted}{this.state.inital} <i className="fas fa-angle-double-right"></i></a>
			        
			    </div>
			</div> 
        )
    }
}

export default LocationInfo


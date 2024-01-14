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

	/*https://www.countryflags.com/${this.props.data.flag}/flat/32.png - OLD website, DOESN'T WORK*/

	getFlag = () => {
		if(this.props.data.flag !== undefined && this.props.data.flag !== 'empty' ){
				const text = (this.props.data.flag.toString()).toLowerCase();
				console.log(typeof(this.props.data.flag));
				console.log(`https://flagsapi.com/${text}/flat/32.png`)
				return text;

			}
	}

    render() {
    	const wikiLink = this.getWikiLink();
    	const showCountry = (this.state.showCountry) ? 'show' : 'hide';
    	const showWater = (this.state.showCountry) ? 'hide' : 'show';
    	const flag = this.getFlag();

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
			        	<img alt="Flag" src={`https://flagsapi.com/RU/flat/32.png`}></img>
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


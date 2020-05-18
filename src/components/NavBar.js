import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component{
	state = {
		navUl : ' hide',
		navBar : '',
		menu : '',
		cancel: ' d-none',
		logo : '',
	}
	handleClickMenu(e){
		e.preventDefault();
		this.setState({
			navUl : '',
			menu : ' d-none',
			cancel: '',
			logo : ' active',
			navBar : ' active',

		})
	}

	handleClickCancel = (e)=>{
		e.preventDefault();
		this.setState({
			navUl : ' hide',
			menu : '',
			cancel: ' d-none',
			logo: '',
			navBar : '',
		});
	}

    render() {
        return (
        	<React.Fragment>
		    	<div className={`logo d-flex${this.state.logo}`}>
					<i className="fas fa-rocket"></i>
					<span className={`menu${this.state.menu}`} onClick={this.handleClickMenu.bind(this)}>
						Menu <i className="fas fa-stream"></i>
					</span>
					<span className={`cancel${this.state.cancel}`} onClick={this.handleClickCancel}><i className="fas fa-minus"></i></span>
				</div>
		         <nav className={`main-nav${this.state.navBar}`}>
		    		<ul className={`nav-links${this.state.navUl}`}>
		    			<li><Link className={`links${this.props.active.home}`} to="/">Home</Link></li>
		    			<li><Link className={`links${this.props.active.doc}`} to="/documentation" >Documentation</Link></li>
		    			<li><Link className={`links${this.props.active.res}`} to="/resources" >Resources</Link></li>
		    			<li><p>v.1.0.0</p></li>
		    			<li><p>Rishabh Sahejpal Designs &copy;</p></li>
		    			<li><p>All rights reserved.</p></li>
		    		</ul>
		    	</nav>
	    	</React.Fragment>
        )
    }
}

export default NavBar

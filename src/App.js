import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Space from './components/Space'
import Documentation from './components/pages/Documentation'
import Resources from './components/pages/Resources'

function App() {
  return (
  	<Router>
  		<Route exact path='/' render = {props =>(
  			<React.Fragment>
  			<div className="App">
		      <Space />
		    </div>
  			</React.Fragment>
  		)}/>
  		<Route path='/documentation' component={Documentation}/>
  		<Route path='/resources' component={Resources}/>
    </Router>
  );
}

export default App;

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';

//new component. this should produce some HTML
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { };
	}

	render() {
		return (
			<div>
				<Header />
				<About />
				<Skills />
				<Contact />
			</div>
		);
	}
}

//generate HTML and put it on the page (the DOM)

ReactDOM.render(<App />, document.getElementById('app'));

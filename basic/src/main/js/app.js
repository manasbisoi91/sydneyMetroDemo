'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import InfringementList from './InfringementList';
import LineChartDisplay from './LineChartDisplay';
import { Router, Route, hashHistory } from 'react-router'
import Whoops404 from './Whoops404';
import BarChartDisplay from './BarChartDisplay'
import { Link } from 'react-router';



class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {infringements: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/infringements'}).done(response => {
			this.setState({infringements: response.entity._embedded.infringements});
		});
	}

	render() {
		

		return (
			
			<InfringementList infringements={this.state.infringements}
			
							  filter={this.props.params.filter}/>
			
		)
	}
}

ReactDOM.render(
	<Router history={hashHistory}>				     
		<Route path="/" component={App}/>
		<Route path="/infringement" component={App}>
			<Route path=":filter" component={App}/>
		</Route>
		<Route path="/lineChart" component={LineChartDisplay}>
			<Route path=":filter" component={LineChartDisplay}/>
		</Route>

		<Route path="*" component={Whoops404}/>
	
	</Router>,
	document.getElementById('react')
)
// end::render[]


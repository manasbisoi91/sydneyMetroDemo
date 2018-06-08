import React from 'react';
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';
const client = require('./client');


export default class LineChartDisplay extends React.Component{

    constructor(props) {
		super(props);
		this.state = {infringements: []};
	}
    componentDidMount() {
        client({method: 'GET', path:`/api/infringements/search/byCategory?category=${this.props.params.filter}`}).done(response => {
        this.setState({infringements: response.entity._embedded.infringements});
    });
}

	render() {
        var mapping=[];
        this.state.infringements.forEach(element => {
            mapping.push({x:element.year,y:element.noOfPns});
        });  
        
        var points=[];	
		const data = [
            {	
                							
                color: "steelblue", 
                points: mapping
            }
        ];
		return (
			
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
                    <h1>Line Graph of {this.props.params.filter}</h1>
                    <LineChart 
                        width={600}
                        height={400}
                        data={data}
                        xLabel='Years'
                        yLabel='No. Of persons'
                    />
                </div>				
            
		)
	}
}
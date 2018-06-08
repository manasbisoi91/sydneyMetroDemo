import React from 'react';
import Infringement from './Infringement';
import { Link } from 'react-router';
import BarChartDisplay from './BarChartDisplay';


export default class InfringementList extends React.Component{
	
	render() {
		const filter =(!this.props.filter || !this.props.filter.match(/2016|2017|2018/))?2016:this.props.filter;
		const infringementYear= this.props.infringements.filter(infringement => infringement.year==filter);

		var infringements = infringementYear.map(infringement =>
			<Infringement key={infringement._links.self.href} infringement={infringement}/>
		);

		
		return (
		<div className='row'>
			<div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">			
			<table>
				<thead>
					<tr>
						<td colSpan={4}	>
							<h3>Select Year *** </h3>
							<Link to="/infringement/2016">
								2016 
							</Link> ***
							<Link to="/infringement/2017">
								2017
							</Link> ***
							<Link to="/infringement/2018">
								2018
							</Link>			

							</td>
					</tr>
					<tr>
							
							<th>Category</th>
							<th>No Of Pns</th>
							<th>Face value</th>
					</tr>
					</thead>	

					<tbody>
						{infringements}
					
					</tbody>
			</table>
			</div>
			<div classname="col-lg-8 col-md-7 col-sm-6 col-xs-12">			
				<BarChartDisplay infringementss={infringementYear}/>
			</div>	
				<div class="btn-group">
				{infringementYear.map(comment => {
					return (
						<Link to={`/lineChart/${comment.category}`} >
						
						<button type="button" class="btn btn-primary">{comment.category}</button>
						</Link>
					);
					})}
					</div>
			</div>
		)
	}
}
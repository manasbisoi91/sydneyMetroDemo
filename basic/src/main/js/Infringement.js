import React from 'react';
import { Link } from 'react-router';

export default class Infringement extends React.Component{
	render() {
		return (
			<tr>
				
				<td>{this.props.infringement.category}</td>
				<td>{this.props.infringement.noOfPns}</td>
				<td>{this.props.infringement.faceValue}</td>
			</tr>
		)
	}
}
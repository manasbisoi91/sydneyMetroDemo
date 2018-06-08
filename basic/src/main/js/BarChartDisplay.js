import React from 'react';
import BarChart from 'react-bar-chart';
import { Link } from 'react-router';

 


 
const margin = {top: 20, right: 20, bottom: 30, left: 40};
 
export default class BarChartDisplay extends React.Component{

    constructor(props) {
		super(props);
		this.state = {width: 800};
	}

  componentDidMount () {
    window.onresize = () => {
     this.setState({width: this.refs.root.offsetWidth}); 
    };
  }
 
  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  
  }
 
  render() {
    var data = [];
    
               
    this.props.infringementss.forEach(element => {
        data.push({text:element.category,value:element.noOfPns});
    }); 
        
        
    

    return (
        <div ref='root'>
            <div style={{width: '100%'}}> 
                <BarChart ylabel='No Of Persons'
                  width={this.state.width}
                  height={300}
                  margin={margin}
                  data= {data}
                  onBarClick={this.handleBarClick}
                  />
            </div>
        </div>
    );
  }
}
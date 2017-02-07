import React from 'react';
import DonutChart from './DonutChart';
import AreaSplineChart from './AreaSplineChart';

class HighChartsPageWrapper extends React.Component {

  constructor(props) {
    	super(props);
      this.state = {pieData: [{name: "Firefox",y: 6},
                              {name: "MSIE",y: 4},
                              {name: "Safari",y: 4},
                              {name: "Opera",y: 1},
                              {name: "Chrome",y: 7}]};
    }

  render(){
    return (
      <div>
          <DonutChart data={this.state.pieData}/>
          <AreaSplineChart/>
      </div>
    )
  }
}
export default HighChartsPageWrapper;

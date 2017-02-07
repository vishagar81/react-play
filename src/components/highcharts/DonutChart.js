import React from 'react';
import Highcharts from 'highcharts';

class DonutChart extends React.Component {
	constructor(props) {
    	super(props);
        this.chart = undefined;
    }

    componentDidMount() {
  	this.chart = new Highcharts.Chart({
              chart: {
                  type: 'pie',
                  renderTo: this.refs.chart
              },
              title: 'Browser Market share',
              yAxis: {
                  title: {
                      text: 'Total percent market share'
                  }
              },
              plotOptions: {
                  pie: {
                      shadow: false
                  }
              },
              tooltip: {
                  formatter: function() {
                      return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                  }
              },
              series: [{
                  name: 'Browsers',
                  data: this.props.data,
                  size: '100%',
                  innerSize: '85%',
                  showInLegend:true,
                  dataLabels: {
                      enabled: true
                  }
              }]
          });
    }

    componentWillReceiveProps(props) {
    	this.chart.highcharts().series[0].setData(props.data);
    }

    render() {
        return (
          <div ref='chart'>
          </div>
        )
    }
}
export default DonutChart;

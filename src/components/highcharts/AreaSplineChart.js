import React from 'react';
import Highcharts from 'highcharts';

class AreaSplineChart extends React.Component {
	constructor(props) {
    	super(props);
        this.chart = undefined;
    }

    componentDidMount() {
    	this.chart = new Highcharts.Chart({
                chart: {
                    type: 'areaspline',
                    renderTo: this.refs.areasplinechart
                },
                title: 'Average fruit consumption during one week',
                legend: {
                  layout: 'vertical',
                  align: 'left',
                  verticalAlign: 'top',
                  x: 150,
                  y: 100,
                  floating: true,
                  borderWidth: 1,
                  backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                  },
                xAxis: {
                    categories: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday'
                    ],
                    plotBands: [{ // visualize the weekend
                        from: 4.5,
                        to: 6.5,
                        color: 'rgba(68, 170, 213, .2)'
                    }]
                },
                yAxis: {
                    title: {
                        text: 'Fruit units'
                    }
                },
                tooltip: {
                    shared: true,
                    valueSuffix: ' units'
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                  areaspline: {
                      fillOpacity: 0.5
                  }
                },
                series: [{
                    name: 'John',
                    data: [3, 4, 3, 5, 4, 10, 12]
                }, {
                    name: 'Jane',
                    data: [1, 3, 4, 3, 3, 5, 4]
                },
                {
                    name: 'Vishal',
                    data: [4, 3, 15, 33, 23, 25, 4]
                }]
            });
    }

    componentWillReceiveProps(props) {
    	this.chart.highcharts().series[0].setData(props.data);
    }

    render() {
        return (
          <div ref='areasplinechart'>
          </div>
        )
    }
}
export default AreaSplineChart;

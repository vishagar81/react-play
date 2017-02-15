import React from 'react';
import ReactDataGrid from 'react-data-grid';
import PercentCompleteFormatter from './PercentCompleteFormatter';

class ReactDataGridPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
         columns: [
          { key: 'id', name: 'ID', width: 80 },
          { key: 'task', name: 'Title' },
          { key: 'priority', name: 'Priority' },
          { key: 'issueType', name: 'Issue Type' },
          { key: 'complete', name: '% Complete', formatter: PercentCompleteFormatter },
          { key: 'startDate', name: 'Start Date' },
          { key: 'completeDate', name: 'Expected Complete' }
         ],
         rows:[]
      };
      this.rowGetter = this.rowGetter.bind(this);
      this.createRows = this.createRows.bind(this);
    }

    componentDidMount(){
      this.createRows();
    }

    createRows(){
      let rows = [];
      for ( let i = 1; i < 500000; i++ ){
        rows.push({
          id: i,
          task: 'Task ' + i,
          complete: Math.min(100, Math.round(Math.random() * 110)),
          priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
          issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
          startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
          completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
        });
      }
      
      this.setState({rows: rows});      
    }

    getRandomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    }

    rowGetter(i) {
      let {rows} = this.state;      
      return rows[i];
    }

    render(){
      var {rows, columns} = this.state;

      return(
           <ReactDataGrid
              columns={columns}
              rowGetter={this.rowGetter}
              rowsCount={rows.length}
              minHeight={500} />
      );
    }
};

export default ReactDataGridPage;

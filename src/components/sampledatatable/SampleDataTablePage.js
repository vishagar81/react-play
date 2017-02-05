const React = require('react');
var FakeObjectDataListStore = require('../helpers/FakeObjectDataListStore');
var FixedDataTable = require('fixed-data-table');

const {Table, Column, Cell} = FixedDataTable;

class TextCell extends React.Component{
  render() {
    return(
      <Cell props={this.props}>
        {this.props.data.getObjectAt(this.props.rowIndex)[this.props.col]}
      </Cell>
    );
  }
}

class DataListWrapper{
  constructor(indexMap, data){
    this._indexMap = indexMap;
    this._data = data;
  }

  getSize(){
    return this._indexMap.length;
  }

  getObjectAt(index){
    return this._data.getObjectAt(
      this._indexMap[index]
    );
  }
}

class SampleDataTablePage extends React.Component {
  constructor(props){
    super(props);
    this._dataList = new FakeObjectDataListStore(10);
    this.state = {
      filteredDataList: this._dataList
    };

    // event binders
    this._onFilterChange = this._onFilterChange.bind(this);
  }

  _onFilterChange(e){
    if(!e.target.value){
      this.setState({
        filteredDataList: this._dataList
      });
    }

    var filterBy = e.target.value.toLowerCase();
    var size = this._dataList.getSize();
    var filteredIndexes = [];
    for (var index = 0; index < size; index++) {
      var {firstName} = this._dataList.getObjectAt(index);
      if (firstName.toLowerCase().indexOf(filterBy) !== -1) {
        filteredIndexes.push(index);
      }
    }

    this.setState({
      filteredDataList: new DataListWrapper(filteredIndexes, this._dataList)
    });
  }

  render() {
    var {filteredDataList} = this.state;
    return (
      <div className="data-table-container">
        <input
          onChange={this._onFilterChange}
          placeholder="Filter by First Name"
        />

        <br />
        <Table
          class="data-table"
          rowHeight={50}
          rowsCount={filteredDataList.getSize()}
          headerHeight={50}
          width={1000}
          height={500}
          props={this.props}>
          <Column
            header={<Cell>First Name</Cell>}
            cell={<TextCell data={filteredDataList} col="firstName" />}
            fixed={true}
            width={100}
          />
          <Column
            header={<Cell>Last Name</Cell>}
            cell={<TextCell data={filteredDataList} col="lastName" />}
            fixed={true}
            width={100}
          />
          <Column
            header={<Cell>City</Cell>}
            cell={<TextCell data={filteredDataList} col="city" />}
            width={100}
          />
          <Column
            header={<Cell>Street</Cell>}
            cell={<TextCell data={filteredDataList} col="street" />}
            width={200}
          />
          <Column
            header={<Cell>Zip Code</Cell>}
            cell={<TextCell data={filteredDataList} col="zipCode" />}
            width={200}
          />
        </Table>
      </div>
    );
  }
}

export default SampleDataTablePage;

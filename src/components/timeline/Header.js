import React from 'react';
import SearchForm from './SearchForm';

class Header extends React.Component {
      constructor(props){
          super(props);
          this.state = {
            searchVisible: false
  				};
      }

      showSearch() {
        this.setState({
          searchVisible: !this.state.searchVisible
        })
      }

      handleSearch(val) {
        // Called when the
      }

			render(){
				return (
          <div className="header">
            <div className="fa fa-more"></div>
            <span className="title">{this.props.headerText}</span>

            <SearchForm searchVisible={this.state.searchVisible}
                        onSubmit={this.handleSearch.bind(this)}/>
            <div  onClick={this.showSearch.bind(this)}
                  className="fa fa-search searchIcon"></div>
          </div>
        );
      }
}
export default Header;

import React from 'react';

class SearchForm extends React.Component {
      constructor(props){
          super(props);
          this.state = {
            searchText: ''
  				};
      }

      updateSearchInput(event){
        this.setState({
          searchText: event.target.value
        });
      }
      submitForm(event){
        event.preventDefault();
        this.props.onSubmit(this.state.searchText);
      }

			render(){
        let searchInputClasses = ["searchInput"];
        if(this.props.searchVisible){
          searchInputClasses.push("active");
        }

				return (
          <form onSubmit={this.submitForm.bind(this)}>
            <input type="search"
                    value={this.state.searchText}
                    className={searchInputClasses.join(' ')}
                    onChange={this.updateSearchInput.bind(this)}
                    placeholder="Search..." />
          </form>
        );
      }
}

SearchForm.propTypes = {
  searchVisible: React.PropTypes.bool,
  onSubmit: React.PropTypes.func.isRequired
}
SearchForm.defaultProps = {
  searchVisible: false,
  onSubmit: () => {}
}
export default SearchForm;

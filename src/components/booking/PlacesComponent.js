import React from 'react';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
let airports = [];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : airports.filter(airport =>
     airport.city !== null && airport.city.slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name + ' (' + suggestion.code + ')';

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name + ' (' + suggestion.code + ')' }
  </div>
);

class PlaceComponent extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      ukAirports: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.loadAirports = this.loadAirports.bind(this);
  }

  loadAirports(){
    const url = 'http://transport.data.gov.uk/doc/airport.json?_page=1' //'https://airport.api.aero/airport?user_key=b08950b7c744aa0ee76d96ea132058fe'

    fetch(url)
      .then(data => data.json())
      .then(parsedObj => this.setState({ ukAirports: parsedObj.result.items }))
      .catch(function(error){
          console.log(error);
      })
  }

  componentDidMount(){
     var myHeaders = new Headers();
     myHeaders.append("Access-Control-Allow-Origin", "*");

     var myInit = {mode: 'cors',
                  headers: myHeaders}

     fetch("https://airport.api.aero/airport?user_key=b08950b7c744aa0ee76d96ea132058fe", myInit)
        .then(results => results.json())
        .then(parsedResults => this.setState({ukAirports: parsedResults.airports}))
        .catch(function(error){
           console.log(error);
        })
  }

  componentWillMount() {
     //this.loadAirports();
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  render() {

    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'City or airport name',
      value,
      onChange: this.onChange,
      className: 'form-control'
    };

    airports = airports.length === 0 ? this.state.ukAirports : airports;

    // Finally, render it!
    return (

			<div className="col-sm-6">
				<p>{this.props.text}</p>
				<div className="inner-addon left-addon">
					<i className="glyphicon glyphicon-map-marker"></i>
          <Autosuggest
             suggestions={suggestions}
             onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
             onSuggestionsClearRequested={this.onSuggestionsClearRequested}
             getSuggestionValue={getSuggestionValue}
             renderSuggestion={renderSuggestion}
             inputProps={inputProps}
          />
        </div>
      </div>
    );
  }
}
export default PlaceComponent;

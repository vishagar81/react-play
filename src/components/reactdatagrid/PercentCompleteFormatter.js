import React from 'react';

const PercentCompleteFormatter = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired
  },

  render() {
    const percentComplete = this.props.value + '%';
    return (
      <div className="progress" style={{marginTop: '20px'}}>
        <div className="progress-bar" 
              role="progressbar" 
              aria-valuenow="60" 
              aria-valuemin="0" 
              aria-valuemax="100" 
              style={{width: percentComplete}}>
          {percentComplete}
        </div>
      </div>);
  }
});

export default PercentCompleteFormatter;
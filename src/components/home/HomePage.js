import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return (
      <div className="jumbotron">
        <h1>Home Page</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps</p>
        <Link to="booking" className="btn btn-primary btn-lg">Check the Booking landing page</Link>
      </div>
    );
  }
}

export default HomePage;

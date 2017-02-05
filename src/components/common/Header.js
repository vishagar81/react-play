import React from 'react';
import {Link} from 'react-router';

const Header = () => {
  return (
    <ul className="nav nav-pills">
         <li><Link to="/" className="active">Home</Link></li>
         <li><Link to="/courses">React Motion Menu</Link></li>
         <li><Link to="/list">Reorderd List</Link></li>
         <li><Link to="/table">Data table</Link></li>
         <li><Link to="/bulletin">Bulletin Board</Link></li>
         <li><Link to="/playground">React Playground</Link></li>
         <li><Link to="/booking">Flight Booking</Link></li>
         <li><Link to="/maps">Google Maps</Link></li>
         <li><Link to="/timeline">Timeline</Link></li>
    </ul>
  );
};

export default Header;

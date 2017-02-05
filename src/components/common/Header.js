import React from 'react';

const Header = () => {
  return (
    <ul className="nav nav-pills">
         <li><a href="/" className="active">Home</a></li>
         <li><a href="/courses">React Motion Menu</a></li>
         <li><a href="/list">Reordered List Example</a></li>
         <li><a href="/table">Data table</a></li>
         <li><a href="/bulletin" >Bulletin Board</a></li>
         <li><a href="/playground">React Playground</a></li>
         <li><a href="/booking">Flight Booking</a></li>
         <li><a href="/maps">Google Maps</a></li>
         <li><a href="/timeline">Timeline</a></li>
    </ul>
  );
};

export default Header;

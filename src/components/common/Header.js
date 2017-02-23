import React from 'react';
import {Link} from 'react-router';

const Header = () => {
  return (
    <header role="banner" id="fh5co-header">
        <div className="container">
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                <a className="navbar-brand" href="index.html">React Play</a> 
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                     <li><Link to="/" className="active" data-nav-section="home"><span>Home</span></Link></li>
                     <li><Link to="/booking" data-nav-section="booking"><span>Flight Booking</span></Link></li>
                     <li><Link to="/reactdatagrid" data-nav-section="reactdatagrid"><span>React Data Grid</span></Link></li>
                     <li><Link to="/highcharts" data-nav-section="highcharts"><span>Highcharts</span></Link></li>
                     <li><Link to="/courses" data-nav-section="courses"><span>React Motion Menu</span></Link></li>
                     <li><Link to="/list" data-nav-section="list"><span>Reorderd List</span></Link></li>
                     <li><Link to="/bulletin" data-nav-section="bulletin"><span>Bulletin Board</span></Link></li>
                     <li><Link to="/table" data-nav-section="table"><span>Data table</span></Link></li>
                     <li><Link to="/playground" data-nav-section="playground"><span>React Playground</span></Link></li>
                </ul>
            </div>
        </nav>
        </div>  
    </header>
  );
};

export default Header;

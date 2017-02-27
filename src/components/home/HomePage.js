import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
  	let avatar = require('../../img/profile.png');
  	let react = require('../../img/svgporn-react.png');
  	let javaScript = require('../../img/svgporn-javascript.png');
  	let css3 = require('../../img/svgporn-css3.png');
  	let html5 = require('../../img/svgporn-html5.png');
    return (
	<div>
      	<div className="jumbotron jumbotron-override">
      		<h2>Responsive Front-end Development</h2>
      		<ul className="skills__list">
      			<li>HTML</li>
      			<li>CSS</li>
      			<li>JavaScript</li>
      			<li>React</li>
      			<li>Angular</li>
      			<li>Redux</li>
  			</ul>
      	</div>
      	<div className="container">
	      <div className="row">
	        <div className="col-md-4 third">
    			<h3>Profile</h3>
    			<div className="avatar social"> 
          			<img src={avatar} width="78" height="78"/>
      			</div>
	          	<div className="bio">
	          		<p className="bio-info">Front-end Developer. Vishal combines his education with 13 years commercial experience in software development to produce high-quality websites and exceptional user experience.</p>
	          		<p>Available March 2017. 
	          		</p>
	          		<p>
		          		<a className="btn btn-primary" href="mailto://tiruvishal@gmail.com" role="button" title="Enquire about hiring Vishal Agarwal">Hire Now »</a>	
          			</p>
          		</div>
	        </div>
	        <div className="col-md-4 third">
	          <h3>Skills</h3>
	          <div className="logos">
	          	<div className="logo"> 
	          		<img src={html5} alt="html5" width="64" height="64" />
          			<strong>HTML5</strong>
      			</div>
      			<div className="logo"> 
	          		<img src={css3} alt="css3" width="64" height="64" />
	          		<strong>CSS3</strong>
          		</div>
          		<div className="logo"> 
          			<img src={javaScript} alt="js" width="64" height="64"/>
          			<strong>JavaScript</strong>
          		</div>
          		<div className="logo"> 
          			<img src={react} alt="react"  width="64" height="64" />
          			<strong>React</strong>
          		</div>
      			</div>
      			
   			</div>
	        <div className="col-md-4 third">
				<h3>Contact</h3>
				<p>
				Address: Milton Keynes, MK10 7HL, <br/>
				email: tiruvishal[at]gmail.com
				</p>

				<h3>Download CV</h3>
				<p>
					<a className="btn btn-primary btn-download" href="https://drive.google.com/file/d/0B0ZOROlXALwpcnZnSlBpSDZfQ2M/view?usp=sharing" role="button" title="Download Vishal's CV">Vishal Agarwal</a>
				</p>
	        </div>
	      </div>
		</div>
	</div>
    );
  }
}

export default HomePage;

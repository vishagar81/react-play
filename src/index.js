import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import $ from 'jquery';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/fixed-data-table/dist/fixed-data-table.min.css';
import '..//node_modules/react-datepicker/dist/react-datepicker.css';
import './styles/styles.css';
import './styles/base-theme.css';

// style overrides
import './styles/theme1.css';

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('app')
);

(function(){
	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};
		

    var burgerMenuSelector = document.querySelector('.js-fh5co-nav-toggle');
    var navbarSelector = document.querySelector('#navbar');
    var $navbarSelector = $('#navbar');
    burgerMenuSelector.addEventListener('click', function(event){
      	if ( $navbarSelector.is(':visible') ) {
			$(this).removeClass('active');
			navbarSelector.style.display = "none";
		} else {
			$(this).addClass('active');	
			navbarSelector.style.display = "block";
		}
		event.preventDefault();
    }, false);

    $("#navbar li").on('click', function(event){
		if($navbarSelector.is(':visible')){
			$('.js-fh5co-nav-toggle').removeClass('active');
			navbarSelector.style.display = "none";
		}
    });

})();

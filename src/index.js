import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/fixed-data-table/dist/fixed-data-table.min.css';
import '..//node_modules/react-datepicker/dist/react-datepicker.css';

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('app')
);
import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
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

 import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PlaygroundPage from './components/playground/PlaygroundPage';
import CoursesPage from './components/course/CoursesPage';
import ReorderedListPage from './components/list/ReorderedListPage';
import SampleDataTablePage from './components/sampledatatable/SampleDataTablePage';
import BulletinBoardPageWrapper from './components/bulletin/BulletinBoardPageWrapper';
import BookingWrapper from './components/booking/BookingWrapper';
import GoogleMapContainer from './components/maps/GoogleMapContainer';
import HighChartsPageWrapper from './components/highcharts/HighChartsPageWrapper';
import ReactDataGridPageWrapper from './components/reactdatagrid/ReactDataGridPageWrapper';

export default (

  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="playground" component={PlaygroundPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="list" component={ReorderedListPage} />
    <Route path="table" component={SampleDataTablePage} />
    <Route path="bulletin" component={BulletinBoardPageWrapper} />
    <Route path="booking" component={BookingWrapper} />
    <Route path="highcharts" component={HighChartsPageWrapper} />
    <Route path="reactdatagrid" component={ReactDataGridPageWrapper} />
  </Route>

);

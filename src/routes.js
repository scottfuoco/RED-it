import React from 'react';
import { BrowserRouter as Router } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import PostList from './containers/PostList';
import Welcome from './containers/Welcome';
import NotFound from './components/NotFound';


import muiTheme from './styles/mui-theme';
import './styles/index.css';

const routes = (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <div>
        <MainLayout />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default routes;

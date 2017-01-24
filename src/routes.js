import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import PostList from './containers/PostList';
import Welcome from './containers/Welcome';
import NotFound from './components/NotFound';


import muiTheme from './styles/mui-theme';
import './styles/index.css';

// const routes = (
//   <MuiThemeProvider muiTheme={muiTheme}>
//     <Router>
//       <div>
//         <Match exactly path="/" component={MainLayout} />
//         <Match path="/posts" component={PostList} />
//         <Miss component={NotFound} />
//       </div>
//     </Router>
//   </MuiThemeProvider>
// );

const routes = (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <Route component={App}>
          <IndexRoute component={Welcome} />
          <Route path="posts" component={PostList}>
              <Route path=":id" component={PostList} />
          </Route>
          <Route path="*" component={NotFound} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
);

export default routes;

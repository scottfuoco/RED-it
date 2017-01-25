import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import storeFactory from './store';
import './styles/index.css';
import routes from './routes';

import { data } from './mock-data';

const initialState = {
  weeks: [...data.weeks],
  posts: [...data.posts],
}

const store = storeFactory(initialState);

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
 <Provider store={store}>
  {routes}
 </Provider>,
  document.getElementById('root')
);

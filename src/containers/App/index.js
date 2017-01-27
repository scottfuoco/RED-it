import React, { Component } from 'react';

import Categories from '../Categories';
import PostList from '../PostList';
import Welcome from '../Welcome';
import NotFound from '../../components/NotFound'
import styles from './styles.css'

import { Match, Miss } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Categories />
        <Match exactly pattern='/' component={Welcome} />
        <Match exactly pattern='/posts/:category/:lessonId' component={PostList} />
        <Miss component={NotFound} />
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object,
// };

export default App;

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

import React, { Component } from 'react';
import Post from '../../components/Post';
import { data } from '../../mock-data';
import styles from './styles.css';


class PostList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      posts: [],
    };
  }

  render() {
    const ToolbarCSS = {
      margin: '0 0 10px',
      padding: '0 30px 0 50px',
      display: 'flex',
      alignItems: 'center',
    };

    const flatButtonCSS = {
      height: '100%',
    };

    return (
      <div className={styles.postListConatainer}>
        <Toolbar style={ToolbarCSS}>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle text="Post" />
          </ToolbarGroup>

          <ToolbarGroup lastChild={true}>
            <div className={styles.ToolbarRightContent}>
              <h3>Sort</h3>
              <FlatButton style={flatButtonCSS}>Newest</FlatButton>
              <FlatButton style={flatButtonCSS}>Popular</FlatButton>
            </div>
          </ToolbarGroup>
        </Toolbar>

        {data.posts.map(post => <Post key={post.id} post={post} />)}
      </div >
    );
  }
}

// PostList.propTypes = {

// };

export default PostList;
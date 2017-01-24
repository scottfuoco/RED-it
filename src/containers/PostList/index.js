import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import Post from '../../components/Post';
import styles from './styles.css';
import { sortNewest, sortPopular } from '../../store/actions/posts';


class PostList extends Component {

  render() {

    const { posts, postFilter, dispatch } = this.props;

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
              <FlatButton onClick={() => dispatch(sortNewest())} style={flatButtonCSS}>Newest</FlatButton>
              <FlatButton onClick={() => dispatch(sortPopular())} style={flatButtonCSS}>Popular</FlatButton>
            </div>
          </ToolbarGroup>
        </Toolbar>

        {posts
          .filter((post) => post.categories.includes(postFilter))
          .map((post) => <Post key={post.id} post={post} dispatch={dispatch} />)}

      </div >
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  postFilter: state.postFilter

});

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps)(PostList);
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import Post from '../../components/Post';
import styles from './styles.css';
import { sortNewest, sortPopular } from '../../store/actions/posts';
import slug from 'slug';
import { Redirect, transitionTo } from 'react-router';


class PostList extends Component {

  
  componentWillUpdate() {
    const { query } = this.props.location;
    const { sort } = query;
    console.log(sort);

  }
  

  render() {
    const { posts, postFilter, dispatch } = this.props;
    const { category } = this.props.params;

    const ToolbarCSS = {
      margin: '0 0 10px',
      padding: '0 30px 0 50px',
      display: 'flex',
      alignItems: 'center',
    };

    const flatButtonCSS = {
      height: '100%',
    };

    const filteredPosts = posts
          .reduce((acc, post) => {
            if (post.categories.map(category => slug(category)).includes(slug(category))){
              acc.push(<Post key={post.id} post={post} dispatch={dispatch} />)
            }
            return acc;
          }, []);

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
        {filteredPosts.length ? filteredPosts : <Redirect to='/404' />}


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
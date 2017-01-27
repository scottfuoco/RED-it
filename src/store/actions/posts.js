import { fetchingResource, doneFetching } from './fetching';

export const voteUp = id => ({
  type: 'VOTE_UP',
  payload: { id },
});

export const sortNewest = () => ({
  type: 'SORT_NEWEST',
  payload: {},
});

export const sortPopular = () => ({
  type: 'SORT_POPULAR',
  payload: {},
});

export const loadPosts = posts => ({
  type: 'LOAD_POSTS',
  payload: posts,
});

export const fetchPosts = lessonId => dispatch => {
  dispatch(fetchingResource());
  fetch(`http://localhost:8000/api/posts/${lessonId}`)
    .then(res => res.json())
    .then(json => {
      dispatch(loadPosts(json))
      dispatch(doneFetching())
    });
};

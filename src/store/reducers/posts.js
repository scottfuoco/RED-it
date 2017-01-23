const postsReducer = (state={}, action) => {
  switch (action.type) {
    case 'VOTE_UP':
      return state.map((post) => {
        if (post.id !== action.payload.id) return post;
        return { ...post, votes: post.votes + 1 };
      });
    case 'SORT_NEWEST':
      return state.slice().sort((post, nextPost) => (parseInt(post.id, 10) - parseInt(nextPost.id, 10)));
    case 'SORT_POPULAR':
      return state.slice().sort((post, nextPost) => (nextPost.votes - post.votes));
    default:
      return state;
  }
};

export default postsReducer;

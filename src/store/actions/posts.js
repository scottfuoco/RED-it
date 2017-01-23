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

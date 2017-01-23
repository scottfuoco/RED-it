export const addWeek = (id, title, categories) => ({
  type: 'ADD_WEEK',
  payload: { id, title, categories },
});

export const addCategories = (categories) => ({
  type: 'ADD_CATEGORIES',
  payload: categories,
});
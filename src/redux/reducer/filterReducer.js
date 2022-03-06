const SET_CATEGORY_BY = 'SET_CATEGORY_BY';
const SET_SORT_BY = 'SET_SORT_BY';

const intialize = {
  sortBy: 'popular',
  category: null,
};

const filterReducer = (state = intialize, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case SET_CATEGORY_BY:
      return {
        ...state,
        category: action.cat,
      };
    default:
      return state;
  }
};

//action
export const setSortBy = (payload) => ({
  type: SET_SORT_BY,
  payload,
});
export const setCategoryBy = (cat) => ({
  type: SET_CATEGORY_BY,
  cat,
});

//thunk
export default filterReducer;

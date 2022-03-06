const SET_CATEGORY_BY = 'SET_CATEGORY_BY';
const SET_SORT_BY = 'SET_SORT_BY';
const SET_SORT_POP = 'SET_SORT_POP';
const intialize = {
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
  category: null,
  sortPop: null,
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
    case SET_SORT_POP:
      return {
        ...state,
        sortPop: action.sort,
      };
    default:
      return state;
  }
};

//action
export const setSortBy = ({ type, order }) => ({
  type: SET_SORT_BY,
  payload: { type, order },
});
export const setCategoryBy = (cat) => ({
  type: SET_CATEGORY_BY,
  cat,
});
export const setSortPop = (sort) => ({
  type: SET_SORT_POP,
  sort,
});

//thunk
export default filterReducer;

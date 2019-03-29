

const initialState = {
  currentUnitsList: [],
  filters: [],
};

function unitReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_UNIT':
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default unitReducer;

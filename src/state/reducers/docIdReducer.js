import * as Types from "../types";

const INITIAL_STATE = {

  docId:''

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_DOC_ID:
      return {
        ...state,
        ...action.payload,
      };

    default:
      // Return the initial state when no action types match.
      return state;
  }
};

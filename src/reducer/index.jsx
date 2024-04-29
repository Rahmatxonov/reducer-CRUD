import { CREATE, DELETE } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case DELETE:
      const deleteIndex = state.findIndex((item) => item.id === action.payload);
      if (deleteIndex !== -1) {
        state.splice(deleteIndex, 1);
      }
      return [...state];
    default:
      return state;
  }
};

const initialState = [];

export { initialState, reducer };

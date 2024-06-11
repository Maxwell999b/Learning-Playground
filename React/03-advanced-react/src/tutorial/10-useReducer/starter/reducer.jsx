import { REMOVE_ITEM, RESET_LIST, CLEAR_LIST } from "./actions";
import { data } from "../../../data";

const reducer = (state, action) => {
  if (action.type == CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type == RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type == REMOVE_ITEM) {
    // console.log(action);
    let newPeople = state.people.filter((person) => person.id !== action.payload.id);
    return { ...state, people: newPeople };
  }
  // return state;
  throw new Error(`UNKNOWN_CONDITION "${action.type} no matching"`);
};

export default reducer;

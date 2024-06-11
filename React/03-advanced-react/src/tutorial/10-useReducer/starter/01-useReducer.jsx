import React, { useReducer } from "react";
import { data, people } from "../../../data";

const defaultState = {
  people: data,
  // isLoading: true,
};
const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";
const reducer = (state, action) => {
  if (action.type == CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type == RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type == REMOVE_ITEM) {
    let newPeople = state.people.filter((person) => person.id !== action.payload.id);
    return { ...state, people: newPeople };
  }
  // return state;
  throw new Error(`UNKNOWN_CONDITION "${action.type} no matching"`);
};
const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const clearItems = () => {
    // setPeople([]);
    dispatch({ type: CLEAR_LIST });
  };
  const resetItems = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  };
  // console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button className="btn" style={{ marginTop: "2rem" }} onClick={resetItems}>
          reset items
        </button>
      ) : (
        <button className="btn" style={{ marginTop: "2rem" }} onClick={clearItems}>
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;

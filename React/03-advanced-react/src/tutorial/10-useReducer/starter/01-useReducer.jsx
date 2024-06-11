import React, { useReducer } from "react";
import { data } from "../../../data";
import { REMOVE_ITEM, RESET_LIST, CLEAR_LIST } from "./actions";
import reducer from "./reducer";
const defaultState = {
  people: data,
  // isLoading: true,
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

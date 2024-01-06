import { useReducer, useState } from "react";
import { data } from "../assets/data";
import { CLEAR, RESET, DELETE } from "./action";
import reducer from "./reducer";

const defaultValue = {
  people: data,
};

const ReducerDemo = () => {
  let [{ people }, dispatch] = useReducer(reducer, defaultValue);

  return (
    <div>
      {people.map((person) => {
        return (
          <tr>
            <td>{person.email}</td>
            <td>
              <button
                onClick={() => {
                  dispatch({ type: DELETE, email: person.email });
                }}
              >
                delete
              </button>
            </td>
          </tr>
        );
      })}
      {
        <button
          onClick={() => {
            people.length > 0
              ? dispatch({ type: CLEAR })
              : dispatch({ type: RESET });
          }}
        >
          {people.length > 0 ? CLEAR : RESET}
        </button>
      }
    </div>
  );
};

export default ReducerDemo;

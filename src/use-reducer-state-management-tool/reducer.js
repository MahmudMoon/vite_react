import { DELETE, RESET, CLEAR } from "./action";
import { data } from "../assets/data";

const reducer = (previousState, action) => {
  if (action.type == CLEAR) {
    return { ...previousState, people: [] };
  } else if (action.type == RESET) {
    return { ...previousState, people: data };
  } else if (action.type == DELETE) {
    console.log(action.email);
    let { people } = { ...previousState };
    let updatedPeople = people.filter((person) => {
      return person.email != action.email;
    });
    return {
      ...previousState,
      people: updatedPeople,
    };
  }
  throw new Error(`Action ${action.type} not handled`);
};

export default reducer;

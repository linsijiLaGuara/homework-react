import { createStore } from "redux";

const INITIAL_STATE = { username: "Anónimo", logeado: false };
const reducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default createStore(reducer);

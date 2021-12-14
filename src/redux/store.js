import { createStore } from "redux";
import nameReducer from "./reducers/nameReducer";

const store = createStore(nameReducer);

export default store;

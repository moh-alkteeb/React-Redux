import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer/index";
import thunk from "redux-thunk";
const store = createStore(reducers, {}, applyMiddleware(thunk));
export default store;

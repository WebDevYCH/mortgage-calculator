import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import data from "./dataReducer";
import idData from "./docIdReducer";

export default combineReducers({
  data: data,
  idData:idData,
  routerReducer,
});

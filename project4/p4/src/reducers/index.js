//import every reducer here.

import searchReducer from "./search";
import filterReducer from "./filter";
import detailsReducer from "./details";
import toggleSideMenu from "./toggleSideMenu";
import pageReducer from "./page";
import isOverlayVisibleReducer from "./isOverlayVisible";
import sortingReducer from "./sort";
import dataRetrieverReducer from "./dataRetriever";
import dataReducer from "./data";
import dataOverlayReducer from "./dataOverlay";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  search: searchReducer,
  filter: filterReducer,
  details: detailsReducer,
  page: pageReducer,
  overlay: isOverlayVisibleReducer,
  sideMenu: toggleSideMenu,
  sortingCategory: sortingReducer,
  dataRetriever: dataRetrieverReducer,
  data: dataReducer,
  dataOverlay: dataOverlayReducer
});

export default allReducers;

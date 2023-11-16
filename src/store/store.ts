import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import someReducer from "./slices";

const rootReducer = combineReducers({
  someReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

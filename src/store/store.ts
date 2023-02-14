import { configureStore, combineReducers } from "@reduxjs/toolkit";
import leagueReducer from "./reducers/LeagueSlice";

const rootReducer = combineReducers({
  leagueReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];



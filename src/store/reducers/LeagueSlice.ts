import { ILeague } from "../../models/ILeague";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchLeagues } from "./ActionCreators";

interface LeagueState {
  leagues: ILeague[] | null;
  isLoading: boolean;
  error: string;
}

const initialState: LeagueState = {
  leagues: null,
  isLoading: false,
  error: "",
};

export const leagueSlice = createSlice({
  name: "league",
  initialState,
  reducers: { },
  extraReducers: {
    [fetchLeagues.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = "";
      console.log(action.payload);
      if (action.payload) {
        state.leagues = action.payload.response;
      }
    },
    [fetchLeagues.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchLeagues.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default leagueSlice.reducer;

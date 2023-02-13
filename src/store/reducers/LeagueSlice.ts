import { ILeague } from "../../models/ILeague";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LeagueState {
  leagues: ILeague[];
  isLoading: boolean;
  error: string;
}

const initialState: LeagueState = {
  leagues: [],
  isLoading: false,
  error: "",
};

export const leagueSlice = createSlice({
  name: "league",
  initialState,
  reducers: {
    getLeague(state) {
      state.isLoading = true;
    },

    getLeagueSuccess(state, action: PayloadAction<ILeague[]>) {
      state.isLoading = false;
      state.error = "";
      state.leagues = action.payload;
    },

    getLeagueError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default leagueSlice.reducer;

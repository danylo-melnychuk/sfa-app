import { ILeague } from "../../models/ILeague";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { fetchLeagues } from "./ActionCreators";
=======
>>>>>>> 305367bd2178ef19a63156c150ed1402d67e5433

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
  extraReducers: {
    [fetchLeagues.fulfilled.type]: (state, action: PayloadAction<ILeague[]>) => {
      state.isLoading = false;
      state.error = "";
      state.leagues = action.payload;
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

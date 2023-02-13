import axios from "axios";
import { ILeague } from "../../models/ILeague";
import { AppDispatch } from "../store";
import { leagueSlice } from "./LeagueSlice";

export const getLeagues = async (dispatch: AppDispatch) => {
  try {
    dispatch(leagueSlice.actions.getLeague());
    const response = await axios.get<ILeague[]>(
      "https://v3.football.api-sports.io/leagues",
      {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "999711cfffb8f580fef2ebe8b93259d5",
        },
      }
    );
    dispatch(leagueSlice.actions.getLeagueSuccess(response.data));
  } catch (e) {
    dispatch(leagueSlice.actions.getLeagueError((e as Error).message));
  }
};

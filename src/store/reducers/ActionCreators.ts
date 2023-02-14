import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ILeague } from "../../models/ILeague";


export const fetchLeagues = createAsyncThunk(
  'leagues/featchAll',
  async (_, thunkAPI) => {
    const response = await axios.get<ILeague[]>(
      "https://v3.football.api-sports.io/leagues",
      {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "999711cfffb8f580fef2ebe8b93259d5",
        },
      }
    );
    return response.data;
  }
)

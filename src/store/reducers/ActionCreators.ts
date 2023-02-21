import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ILeague } from "../../models/ILeague";


export const fetchLeagues = createAsyncThunk(
  'leagues/featchAll',
  async (_, thunkAPI) => {
    const response = await axios.get<ILeague[]>(
      "https://v1.hockey.api-sports.io/leagues",
      {
        headers: {
          "x-rapidapi-host": "v1.hockey.api-sports.io",
          "x-rapidapi-key": "999711cfffb8f580fef2ebe8b93259d5",
        },
      }
    );
    
    console.log(response.data);
    return response.data;
  }
);

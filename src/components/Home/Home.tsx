import { FC, useEffect } from "react";
import { useLeagueDispatch, useLeagueSelector } from "../../hooks/redux";
import { fetchLeagues } from "../../store/reducers/ActionCreators";
  
export const Home: FC = () => {
  const { leagues } = useLeagueSelector((state) => state.leagueReducer);
  const dispatch = useLeagueDispatch();

  useEffect(() => {dispatch(fetchLeagues())}, []);

  return (
    <>
      <h1>{JSON.stringify(leagues, null, 2)}</h1>
    </>
  );
};

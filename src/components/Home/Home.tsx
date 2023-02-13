import { FC, useEffect } from "react";
import { useLeagueDispatch, useLeagueSelector } from "../../hooks/redux";
import { getLeagues } from "../../store/reducers/ActionCreators";
  
export const Home: FC = () => {
  const dispatch = useLeagueDispatch();
  const { leagues } = useLeagueSelector((state) => state.leagueReducer);

  useEffect(() => dispatch(getLeagues()), []);

  return (
    <>
      <h1>{JSON.stringify(leagues, null, 2)}</h1>
    </>
  );
};

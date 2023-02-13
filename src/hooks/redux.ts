import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useLeagueDispatch = () => useDispatch<AppDispatch>();
export const useLeagueSelector: TypedUseSelectorHook<RootState> = useSelector;

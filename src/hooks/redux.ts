import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useDispatchApp = () => useDispatch<AppDispatch>();
export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector;

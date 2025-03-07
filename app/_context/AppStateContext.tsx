import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { AppStateType } from "../_interfaces/AppState.interface";
import { AppActionsType } from "../_interfaces/AppActions.interface";

const AppStateContext = createContext<
  | { appState: AppStateType; appStateDispatch: React.Dispatch<AppActionsType> }
  | undefined
>(undefined);

const appStateReducer: (
  state: AppStateType,
  action: AppActionsType
) => AppStateType = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState: AppStateType = {
  list: ["hi", "hi again"],
};

export function AppStateContextProvider({ children }: { children: ReactNode }) {
  const [appState, appStateDispatch] = useReducer(
    appStateReducer,
    initialState
  );
  return (
    <AppStateContext.Provider value={{ appState, appStateDispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppStateContext() {
  const stateAndDispatch = useContext(AppStateContext);
  if (!stateAndDispatch) {
    throw new Error("Context must be used within a Provider");
  }
  return stateAndDispatch;
}

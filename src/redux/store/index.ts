import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { loadPlannerState, loadUIState, loadThemeState } from '../utils';

import * as reducers from '../slices';
import {
  socketMiddleware,
  toastMiddleware,
  localStorageMiddleware,
} from '../middleware';

function getPreloadedState() {
  const loadedPlannerState = loadPlannerState();
  const loadedUIState = loadUIState();
  const loadedThemeState = loadThemeState();
  return {
    planner: {
      ...loadedPlannerState,
    },
    ui: loadedUIState,
    theme: loadedThemeState,
  };
}

const rootReducer = combineReducers({
  ...reducers,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: getPreloadedState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(socketMiddleware())
      .concat(toastMiddleware)
      .concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const dispatch = store.dispatch;

export default store;

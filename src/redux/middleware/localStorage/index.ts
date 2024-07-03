import { Middleware } from '@reduxjs/toolkit';

const localStorageMiddleware: Middleware = ({ getState, dispatch }) => {
  return (next) => (action) => {
    const result = next(action);

    return result;
  };
};

export default localStorageMiddleware;

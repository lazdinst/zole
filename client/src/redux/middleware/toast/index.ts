import { Middleware } from '@reduxjs/toolkit';

export const toastMiddleware: Middleware =
  (store) => (next) => (action: unknown) => {
    console.log('Action:', store);
    return next(action);
  };

export default toastMiddleware;

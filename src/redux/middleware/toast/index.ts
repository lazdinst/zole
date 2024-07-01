import { Middleware } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// TODO: This could be made so its modular and has unique conditions for each toast
export const toastMiddleware: Middleware =
  (store) => (next) => (action: unknown) => {
    const serverConnected = store.getState().api.connected;

    if (serverConnected) {
      toast.success('Server Connected');
    }

    return next(action);
  };

export default toastMiddleware;

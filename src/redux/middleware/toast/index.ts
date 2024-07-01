import { Middleware } from '@reduxjs/toolkit';
import { CustomAction } from '../socket/types/websocket.types';
import { toast } from 'react-toastify';

// TODO: This could be made so its modular and has unique conditions for each toast
export const toastMiddleware: Middleware =
  (store) => (next) => (action: unknown) => {
    const typedAction = action as CustomAction;

    const serverConnected = store.getState().server.connected;

    if (serverConnected) {
      if (
        typedAction.type?.endsWith('/rejected') &&
        typedAction.error?.message
      ) {
        const errorMessage = typedAction?.payload;
        toast.error(
          errorMessage || 'An error occurred; No error message provided.'
        );
      }

      if (typedAction.type === 'generator/executeGenerate/fulfilled') {
        toast.success('Plan generated successfully');
      }
    }

    // Planner Home position
    if (typedAction.type === 'planner/setHomePosition') {
      toast.success('Home Position Set');
    }

    if (typedAction.type === 'planner/removeTask') {
      toast.success('Removed Task');
    }

    return next(action);
  };

export default toastMiddleware;

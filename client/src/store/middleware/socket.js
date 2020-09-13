// import TYPES from '../types';

// // import onOpen from './onOpen';
// // import onClose from './onClose';
// // import onError from './onError';
// // import onMessage from './onMessage';

// const sockets = (() => { 

//   var socket = null;

//   return store => next => action => {
//     const { dispatch } = store;
//     const state = store.getState();

//     switch(action.type) {

//       // case TYPES.ADD_ROBOT_SOCKET:
//       //   // Start a new connection to the server
//       //   if(socket != null) {
//       //     socket.close();
//       //   }

//       //   // Set the API Host URL and State
//       //   dispatch(setSocketState(API_CONTENT.CONNECTING))
//       //   socket = new WebSocket(`${api.wsUri}/status`);
//       //   socket.onmessage = onMessage(socket, store, robot, api);
//       //   socket.onclose = onClose(socket, store, robot, api);
//       //   socket.onopen = onOpen(socket, store, robot, api);
//       //   socket.onerror = onError(socket, store, robot, api);
//       //   break;

//       // //The user wants us to disconnect
//       // case TYPES.REMOVE_ROBOT_SOCKET:
//       //   if(socket != null) {
//       //     socket.close();
//       //     dispatch(setSoftShutdown(true));
//       //     dispatch(setSocketState(API_CONTENT.DISCONNECTING))
//       //   }
//       //   socket = null;
//       //   break;
        
//       default:
//         return next(action);
//     }
//   }

// })();

// export default sockets;

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers'
// import sockets from './middleware/socket';
// import _ from 'lodash';

export const history = createBrowserHistory()

const preloadedState = {};

const enhancers = []
const middleware = [
  thunk, 
  // sockets, 
  routerMiddleware(history)
];

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

// console.log('PRELOAD ', preloadedState)
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  createRootReducer(history),
  preloadedState,
  composedEnhancers
)

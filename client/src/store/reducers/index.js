import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import game from './game';

export default (history) => combineReducers({
  game,
  router: connectRouter(history),
})
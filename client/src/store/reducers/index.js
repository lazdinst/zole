import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import game from './game';
import players from './players';
import team from './team';

export default (history) => combineReducers({
  players,
  game,
  team,
  router: connectRouter(history),
})
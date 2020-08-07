import { combineReducers } from 'redux';

import flags from '../../../pages/flags/redux/flags';
import capitals from '../../../pages/capitals/redux/capitals';
import multipleOptionsGame from '../multipleOptionsGame';

export default combineReducers({
  flags,
  capitals,
  multipleOptionsGame,
});

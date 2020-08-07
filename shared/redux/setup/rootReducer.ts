import { combineReducers } from 'redux';

import capitals from '../../../pages/capitals/redux/capitals';
import multipleOptionsGame from '../multipleOptionsGame';

export default combineReducers({
  capitals,
  multipleOptionsGame,
});

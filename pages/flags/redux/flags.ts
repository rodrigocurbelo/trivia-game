import { getCountriesAndContinentWinner } from '../../../shared/networking/countries/flags';

const LOAD_DATA = 'flags/LOAD_DATA';

export function loadFlags() {
  return dispatch => {
    return getCountriesAndContinentWinner().then(data => {
      dispatch({
        type: LOAD_DATA,
        payload: {
          flags: data.countries,
          winnerContinent: data.winnerContinent,
        },
      });
    });
  };
}

const initialState = {
  winnerContinent: null,
  flags: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

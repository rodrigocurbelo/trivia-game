import { Dispatch } from 'redux';

const RESTART_GAME = 'multipleOptionsGame/RESTART_GAME';
const CHANGE_VALIDATION = 'multipleOptionsGame/CHANGE_VALIDATION';
const CHANGE_SELECTED_OPTIONS = 'multipleOptionsGame/CHANGE_SELECTED_OPTIONS';

export function setOptionSelection(id: string, selected: boolean) {
  return (dispatch: Dispatch, getState) => {
    return dispatch({
      type: CHANGE_SELECTED_OPTIONS,
      payload: {
        ...getState().multipleOptionsGame.selectedOptions,
        [id]: selected,
      },
    });
  };
}

export function setValidated(validated: boolean) {
  return {
    type: CHANGE_VALIDATION,
    payload: validated,
  };
}

export function restartMultipleOptionsGame() {
  return { type: RESTART_GAME };
}

const initialState = {
  pristine: true,
  validated: false,
  selectedOptions: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTED_OPTIONS:
      return {
        ...state,
        pristine: false,
        selectedOptions: action.payload,
      };

    case CHANGE_VALIDATION:
      return {
        ...state,
        validated: action.payload,
      };

    case RESTART_GAME:
      return initialState;

    default:
      return state;
  }
}

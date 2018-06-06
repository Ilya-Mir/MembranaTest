export default function date(state = { format: null }, action) {
  switch (action.type) {
    case 'SET_DAY': {
      return { ...state, format: 'dd' };
    }

    case 'SET_MONTH': {
      return { ...state, format: 'MM' };
    }

    case 'SET_YEAR': {
      return { ...state, format: 'YYYY' };
    }

    case 'CLEAR': {
      return { ...state, format: null };
    }

    default:
      return state;
  }
}

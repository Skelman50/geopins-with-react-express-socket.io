export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: payload,
      };

    case 'IS_LOGGED_IN':
      return {
        ...state,
        isAuth: payload,
      };

    case 'SIGNOUT_USER':
      return {
        ...state,
        isAuth: false,
        currentUser: null,
      };

    case 'CREATE_DRAFT':
      return {
        ...state,
        currentPin: null,
        draft: {
          latitude: 0,
          longitude: 0,
        },
      };

    case 'UPDATE_DRAFT':
      return {
        ...state,
        draft: payload,
      };

    case 'DELETE_DRAFT':
      return {
        ...state,
        draft: null,
      };

    case 'GET_PINS':
      return {
        ...state,
        pins: payload,
      };

    case 'PIN_CREATED':
      const newPin = payload;
      const prevPins = state.pins.filter(pin => pin._id !== newPin._id);
      return {
        ...state,
        pins: [...prevPins, newPin],
      };

    case 'PIN_DELETED':
      const deletedPin = payload;
      const pinsUpdated = state.pins.filter(pin => deletedPin._id !== pin._id);
      if (state.currentPin) {
        const isCurrenPin = deletedPin._id === state.currentPin._id;
        if (isCurrenPin) {
          return {
            ...state,
            currentPin: null,
            pins: pinsUpdated,
          };
        }
      }
      return {
        ...state,
        pins: pinsUpdated,
      };

    case 'SET_PIN':
      return {
        ...state,
        currentPin: payload,
        draft: null,
      };

    case 'CREATE_COMMENT':
      const updatedPin = payload;
      const updatedPins = state.pins.map(pin => (pin._id === updatedPin._id ? updatedPin : pin));

      return {
        ...state,
        pins: updatedPins,
        currentPin: updatedPin,
      };

    case 'CLOSE_POPUP_PIN':
      return {
        ...state,
        draft: null,
        currentPin: null,
      };

    case 'SET_SOCKET':
      return {
        ...state,
        socket: payload,
      };

    default:
      return state;
  }
}

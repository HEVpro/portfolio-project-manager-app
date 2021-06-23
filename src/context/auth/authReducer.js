import {
  REGISTER_OK,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_OK,
  LOGIN_ERROR,
  CLOSE_SESSION,
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case LOGIN_OK:
    case REGISTER_OK: {
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        autenticated: true,
        msg: null,
        loading: false,
      };
    }
    case CLOSE_SESSION:
    case LOGIN_ERROR:
    case REGISTER_ERROR: {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        autenticated: null,
        msg: action.payload,
        loading: true,
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
        autenticated: true,
      };
    }

    default:
      return state;
  }
};

import { defaultManyObjectState } from "utils/constants";
import { extractStatus, handleFetch } from 'helpers/reducerHelper';
import { SIGN_IN_SUCCESS, SIGN_IN_REQUEST, SIGN_IN_ERROR } from 'redux/types';

const defaultPayload = {
  data: [],
  errors: [],
};

const authReducer = (
  state = defaultManyObjectState,
  { type, payload = defaultPayload }: any
) => {
  const status = extractStatus(type);
  switch (type) {
    case SIGN_IN_REQUEST:
    case SIGN_IN_SUCCESS:
    case SIGN_IN_ERROR:
      return handleFetch(state, status, payload);
    default:
      return state;
  }
};

export default authReducer;
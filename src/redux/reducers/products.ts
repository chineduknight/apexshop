import { defaultManyObjectState, defaultSingleObjectState } from "utils/constants";
import { extractStatus, handleFetch } from "helpers/reducerHelper";
import { PRODUCT_LIST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_ERROR } from "redux/types";

const defaultPayload = {
  data: [],
  errors: [],
};

const initalState = {
  productList: defaultManyObjectState,
  productDetails: defaultSingleObjectState
}

const productsReducer = (
  state = initalState,
  { type, payload = defaultPayload }: any
) => {
  const status = extractStatus(type);

  switch (type) {
    case PRODUCT_LIST.request:
    case PRODUCT_LIST.success:
    case PRODUCT_LIST.error:
      return handleFetch(state, status, payload, "productList");
    case PRODUCT_DETAILS_REQUEST:
    case PRODUCT_DETAILS_SUCCESS:
    case PRODUCT_DETAILS_ERROR:
      return handleFetch(state, status, payload, "productDetails");
    default:
      return state;
  }
};

export default productsReducer;

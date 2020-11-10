import { convertParamsToString, safeSaga } from 'helpers';
import { successHandler } from 'helpers/apiRequests';
import { takeLatest, call, put } from "redux-saga/effects";
import { PRODUCT_DETAILS_ERROR, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST } from 'redux/types';
import api, { productsRequest } from "services/api";

function* getProducts() {
  const response = yield call([api, "get"], productsRequest.PRODUCTS);

  yield call(successHandler, response, PRODUCT_LIST.success)

}

function* getProduct({ payload }) {
  const url = convertParamsToString(productsRequest.SINGLE_PRODUCT, { id: payload });
  const { data } = yield call([api, "get"], url);

  yield put({
    type: PRODUCT_DETAILS_SUCCESS,
    payload: { data },
  });
}

export default function* productsSaga() {
  yield takeLatest(PRODUCT_LIST.request, safeSaga(getProducts, PRODUCT_LIST.error));
  yield takeLatest(PRODUCT_DETAILS_REQUEST, safeSaga(getProduct, PRODUCT_DETAILS_ERROR));
}

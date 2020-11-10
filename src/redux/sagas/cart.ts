import { convertParamsToString, safeSaga } from 'helpers';
import { successHandler } from 'helpers/apiRequests';
import { takeLatest, call, put } from "redux-saga/effects";
import { CART_ADD_ITEM, PRODUCT_DETAILS_ERROR, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST } from 'redux/types';
import api, { productsRequest } from "services/api";

function* addToCart() {
  const response = yield call([api, "get"], productsRequest.PRODUCTS);

  const { data } =
    productsRequest

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}


export default function* cartSaga() {
  yield takeLatest(CART_ADD_ITEM, addToCart);
}

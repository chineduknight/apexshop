import { PRODUCT_DETAILS_REQUEST, PRODUCT_LIST } from 'redux/types';


export const listProducts = () => ({
  type: PRODUCT_LIST.request,
});

export const listProductDetails = (payload) => ({
  type: PRODUCT_DETAILS_REQUEST,
  payload
});

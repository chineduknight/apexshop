import { CART_ADD_ITEM } from 'redux/types';

export const addToCart = (payload) => ({
  type: CART_ADD_ITEM,
  payload
});

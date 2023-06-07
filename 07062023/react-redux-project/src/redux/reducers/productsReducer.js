import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productsReducer(state = initialState.products, action) {
switch (action.type) {
case types.GET_PRODUCTS_SUCCESS:
return action.payload;
default:
return state;
}
}
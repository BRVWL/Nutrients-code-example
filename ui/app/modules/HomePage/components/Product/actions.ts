import { createRoutine } from 'redux-saga-routines';

export const addProducts = createRoutine('ADD_PRODUCTS');
export const getProducts = createRoutine('GET_PRODUCTS');

export const productsActions = { getProducts, addProducts };

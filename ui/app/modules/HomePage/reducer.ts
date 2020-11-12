/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import { sideMenuReducer } from './components/SideMenu/reducer';
import { productReducer } from './components/Product/reducer';
import { categoryReducer } from './components/Category/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export const homeReducer = combineReducers({
  sideMenu: sideMenuReducer,
  product: productReducer,
  category: categoryReducer,
});

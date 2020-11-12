import { createRoutine } from 'redux-saga-routines';

export const getCategories = createRoutine('GET_CATEGORIES');
export const clickOnCategory = createRoutine('CLICK_ON_CATEGORY');

export const categoriesActions = { getCategories, clickOnCategory };

import { takeLatest, put, all, select } from 'redux-saga/effects';
import { sideMenuActions } from './actions';
import { categoriesActions } from '../Category/actions';

const selectMenuItemWorker = function* worker({ payload }) {
  const categories = yield select(({ home }: any) => home.category.categories);
  const newCategories = { ...categories };
  newCategories[payload].isOpen = !newCategories[payload].isOpen;
  yield put(categoriesActions.clickOnCategory.success(newCategories));
  yield put(sideMenuActions.selectMenuItem.success(payload));
};

export const sideMenuSaga = function* combined() {
  yield all([
    yield takeLatest(sideMenuActions.selectMenuItem, selectMenuItemWorker),
  ]);
};

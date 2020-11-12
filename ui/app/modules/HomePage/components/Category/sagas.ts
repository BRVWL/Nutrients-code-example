import { categoriesActions } from './actions';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { normalizeResponseAndInject } from '../../../../utils/index';
import { getCategoies } from './queries';

const getCategoiesWorker = function* worker() {
  const defaultConfigForEntity = {
    isOpen: false,
  };
  try {
    yield put(categoriesActions.getCategories.request());
    const { categories } = yield call(getCategoies);
    const normalizedProducts = normalizeResponseAndInject(
      categories,
      defaultConfigForEntity,
    );
    yield put(categoriesActions.getCategories.success(normalizedProducts));
  } catch (error) {
    yield put({ type: categoriesActions.getCategories.failure(error) });
  } finally {
    yield put(categoriesActions.getCategories.fulfill());
  }
};

export const categorySaga = function* combined() {
  yield all([
    yield takeLatest(
      categoriesActions.getCategories.trigger,
      getCategoiesWorker,
    ),
  ]);
};

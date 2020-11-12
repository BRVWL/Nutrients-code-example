import { productsActions } from './actions';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { normalizeResponse } from '../../../../utils/index';
import { getProducts, createProduct } from './queries';
import { categoriesActions } from '../Category/actions';

const getProductsWorker = function* worker() {
  try {
    yield put(productsActions.getProducts.request());
    const { products } = yield call(getProducts);
    const normalizedProducts = normalizeResponse(products);
    yield put(productsActions.getProducts.success(normalizedProducts));
  } catch (error) {
    yield put({ type: productsActions.getProducts.failure(error) });
  } finally {
    yield put(productsActions.getProducts.fulfill());
  }
};

const addProductsWorker = function* worker({ payload }) {
  const { categoryId, name, calories, carbs, protein, fat } = payload;
  try {
    yield put(productsActions.addProducts.request());
    yield call(createProduct, categoryId, name, calories, carbs, protein, fat);
    yield put(productsActions.addProducts.success());
    yield put(categoriesActions.getCategories.trigger());
    yield put(productsActions.getProducts.trigger());
  } catch (error) {
    yield put({ type: productsActions.addProducts.failure(error) });
  } finally {
    yield put(productsActions.addProducts.fulfill());
  }
};

export const productSaga = function* combined() {
  yield all([
    yield takeLatest(productsActions.getProducts.trigger, getProductsWorker),
    yield takeLatest(productsActions.addProducts.trigger, addProductsWorker),
  ]);
};

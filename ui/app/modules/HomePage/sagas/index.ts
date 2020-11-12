import { all, fork } from 'redux-saga/effects';
import { productSaga } from '../components/Product/sagas';
import { categorySaga } from '../components/Category/sagas';
import { sideMenuSaga } from '../components/SideMenu/sagas';

export const homeSaga = function* combined() {
  yield all([
    yield fork(productSaga),
    yield fork(sideMenuSaga),
    yield fork(categorySaga),
  ]);
};

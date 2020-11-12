import { all, fork } from 'redux-saga/effects';
import { homeSaga } from './modules/HomePage/sagas';

const sagas = [homeSaga];

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}

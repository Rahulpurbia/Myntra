import { all, call } from "redux-saga/effects";
import productsSaga from "./productsSagas";

export default function* rootSaga() {
  yield all([call(productsSaga)]);
}

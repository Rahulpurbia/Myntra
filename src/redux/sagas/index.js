import { all, call } from "redux-saga/effects";
import productsSaga from "./productsSagas";
import { watchAddToast } from "./toastSagas";

export default function* rootSaga() {
  yield all([call(productsSaga),watchAddToast()]);
}

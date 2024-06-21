// src/redux/sagas/toastSaga.js
import { takeEvery, put, delay } from "redux-saga/effects";
import { ADD_TOAST, REMOVE_TOAST } from "../actions/toastActions";

function* handleAddToast(action) {
  yield delay(3000); // Adjust the delay as needed
  yield put({ type: REMOVE_TOAST, payload: { id: action.payload.id } });
}

export function* watchAddToast() {
  yield takeEvery(ADD_TOAST, handleAddToast);
}

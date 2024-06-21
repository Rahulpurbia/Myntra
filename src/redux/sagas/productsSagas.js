import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";

function fetchProductsApi(page) {
  return axios.get(`https://fakestoreapi.com/products?limit=20&page=${page}`);
}

function* fetchProducts(action) {
  try {
    const response = yield call(fetchProductsApi, action.payload);
    const existingProducts = yield select((state) => state.products.products);
    yield put({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: [...existingProducts, ...response.data],
    });
  } catch (error) {
    yield put({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
  }
}

function* productsSaga() {
  yield takeLatest("FETCH_PRODUCTS_REQUEST", fetchProducts);
}

export default productsSaga;

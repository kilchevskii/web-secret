import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
const apiUrl = "https://getlens-master.stage.dev.family/api/pages/obektivy";

let copyProduct = [];

const getProducts = () =>
  axios
    .get(`${apiUrl}`, {
      login: "admin",
      password: "Wj3g4W",
    })
    .then((result) => result.data.products)
    .catch((error) => {
      throw error;
    });

function* sortByCostProducts(data) {
  try {
    const sortedValue = data.payload;
    yield put({
      type: "GET_SORT_VALUE_SUCCESS",
      payload: [sortedValue, copyProduct],
    });
  } catch (error) {
    yield put({ type: "PRODUCTS_FAILED", message: error.message });
  }
}

function* sortByNameProducts(data) {
  try {
    const sortedName = data.payload.join(",").split("");
    yield put({
      type: "GET_SORT_NAME_SUCCESS",
      payload: [sortedName, copyProduct],
    });
  } catch (error) {
    yield put({ type: "PRODUCTS_FAILED", message: error.message });
  }
}

function* fetchProducts() {
  try {
    const products = yield call(getProducts);
    copyProduct = JSON.parse(JSON.stringify(products));
    yield put({ type: "GET_PRODUCTS_SUCCESS", payload: products });
  } catch (error) {
    yield put({ type: "PRODUCTS_FAILED", message: error.message });
  }
}

function* sortProductsByName() {
  yield takeEvery("GET_SORT_NAME_REQUESTED", sortByNameProducts);
}

function* sortProductsByCost() {
  yield takeEvery("GET_SORT_COST_REQUESTED", sortByCostProducts);
}

function* fetchProductsSaga() {
  yield takeEvery("GET_PRODUCTS_REQUESTED", fetchProducts);
}

export { fetchProductsSaga, sortProductsByCost, sortProductsByName };

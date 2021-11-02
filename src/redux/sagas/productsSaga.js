import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
const apiUrl = "https://getlens-master.stage.dev.family/api/pages/obektivy";

const accumStr = (array) => {
  let resultStr = [];
  array.map((item) => {
    switch (item) {
      case "Canon":
        resultStr.push("brands[]=1&");
        break;
      case "Nikon":
        resultStr.push("brands[]=9&");
        break;
      default:
        return resultStr.push("brands[]=0&");
    }
    return resultStr;
  });
  return resultStr.join("");
};

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

const getSortProducts = async ({ maxValue, minValue, checkedList }) => {
  return await axios
    .get(
      `https://getlens-master.stage.dev.family/api/pages/obektivy?${
        checkedList ? accumStr(checkedList) : null
      }&price[min]=${minValue ? minValue : 0}&price[max]=${
        maxValue ? maxValue : 499000
      }`,
      {
        login: "admin",
        password: "Wj3g4W",
      }
    )
    .then((result) => result.data.products)
    .catch((error) => {
      throw error;
    });
};

function* sortProductsSaga(data) {
  try {
    const sortProducts = yield call(() => getSortProducts(data.payload));
    console.log(sortProducts);
    yield put({
      type: "GET_SORT_SUCCESS",
      payload: sortProducts,
    });
  } catch (error) {
    yield put({ type: "PRODUCTS_FAILED", message: error.message });
  }
}

function* fetchProducts() {
  try {
    const products = yield call(getProducts);
    yield put({ type: "GET_PRODUCTS_SUCCESS", payload: products });
  } catch (error) {
    yield put({ type: "PRODUCTS_FAILED", message: error.message });
  }
}

function* fetchSortProducts() {
  yield takeEvery("GET_SORT_REQUESTED", sortProductsSaga);
}

function* fetchProductsSaga() {
  yield takeEvery("GET_PRODUCTS_REQUESTED", fetchProducts);
}

export { fetchProductsSaga, fetchSortProducts };

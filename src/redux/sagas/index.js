import { all } from "redux-saga/effects";
import {
  fetchProductsSaga,
  fetchSortProducts,
} from "./productsSaga";
export default function* rootSaga() {
  yield all([fetchProductsSaga(), fetchSortProducts()]);
}

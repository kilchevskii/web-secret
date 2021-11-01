import { all } from "redux-saga/effects";
import {
  fetchProductsSaga,
  sortProductsByCost,
  sortProductsByName,
} from "./productsSaga";
export default function* rootSaga() {
  yield all([fetchProductsSaga(), sortProductsByCost(), sortProductsByName()]);
}

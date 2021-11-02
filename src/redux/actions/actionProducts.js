import { GET_PRODUCTS_REQUESTED, GET_SORT_REQUESTED } from "./actionTypes";

export const getProducts = (data) => {
  return {
    type: GET_PRODUCTS_REQUESTED,
    payload: data,
  };
};

export const sortProducts = (data) => {
  return {
    type: GET_SORT_REQUESTED,
    payload: data,
  };
};

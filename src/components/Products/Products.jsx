import React from "react";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/actionProducts";
import useWindowDimensions from "../hooks";
import CardLoader from "../Loaders/CardLoader";
import MobileCardLoader from "../Loaders/MobileCardLoader";
function Products() {
  const products = useSelector((state) => state?.products.data);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.products.loading);
  const { width } = useWindowDimensions();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="App__product-container">
      {isLoading
        ? width > 440
          ? Array(8)
              .fill(0)
              .map((_, index) => <CardLoader key={index} />)
          : Array(8)
              .fill(0)
              .map((_, index) => <MobileCardLoader key={index} />)
        : products
        ? products.map((item) => {
            return (
              <Card
                key={item?.id}
                image={item?.image?.desktop?.x1}
                id={item?.id}
                title={item?.title}
                price={item?.price}
                isNew={item?.is_new}
                isSecondHand={item?.is_second_hand}
              />
            );
          })
        : null}
    </div>
  );
}

export default Products;

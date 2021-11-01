import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider, InputNumber, Checkbox } from "antd";
import {
  sortProducts,
  sortProductsByName,
} from "../../redux/actions/actionProducts";

function Menu() {
  const productsAmount = useSelector((state) => state?.products.data);
  const CheckboxGroup = Checkbox.Group;
  const listOptions = [
    "Canon",
    "Nikon",
    "FujiFilm",
    "Sony",
    "Olympus",
    "Panasonic",
    "Другие",
  ];
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(499000);
  const [checkedList, setCheckedList] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const value = [minValue, maxValue];
    dispatch(sortProducts(value));
  }, [minValue, maxValue, dispatch]);

  const priceFunc = (data) => {
    dispatch(sortProducts(data));
  };
  const handleChangeValue = (value) => {
    let [min, max] = value;
    setMinValue(min);
    setMaxValue(max);
  };
  const onChange = (list) => {
    setCheckedList(list);
    dispatch(sortProductsByName(list));
  };
  return (
    <div className="App__menu">
      <div className="App-description">
        <p className="length-description">Товаров {productsAmount?.length}</p>
        <h1 className="name-description">Камеры</h1>
      </div>

      <div className="slider-container">
        <p className="bolder-description">Цена, ₽</p>
        <div className="input-container">
          <InputNumber
            value={minValue}
            className="first"
            onChange={(value) => setMinValue(value)}
          />
          <InputNumber
            value={maxValue}
            onChange={(value) => setMaxValue(value)}
          />
        </div>
        <Slider
          min={0}
          max={499000}
          range={{ draggableTrack: true }}
          value={[minValue, maxValue]}
          onChange={(value) => handleChangeValue(value)}
          onAfterChange={(value) => priceFunc(value)}
        />
      </div>
      <p className="bolder-description">Бренд</p>
      <div className="brends-group">
        <CheckboxGroup
          options={listOptions}
          value={checkedList}
          onChange={(value) => onChange(value)}
        />
      </div>
    </div>
  );
}

export default Menu;

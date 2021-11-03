import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider, InputNumber, Checkbox } from "antd";
import { sortProducts } from "../../redux/actions/actionProducts";
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
    return minValue === 0 && maxValue === 499000 && !checkedList
      ? null
      : dispatch(sortProducts({ minValue, maxValue, checkedList }));
  }, [minValue, maxValue, checkedList, dispatch]);

  const changeValue = (value) => {
    let [min, max] = value;
    setMinValue(min);
    setMaxValue(max);
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
          onChange={(value) => changeValue(value)}
        />
      </div>
      <p className="bolder-description">Бренд</p>
      <div className="brends-group">
        <CheckboxGroup
          options={listOptions}
          value={checkedList}
          onChange={(title) => setCheckedList(title)}
        />
      </div>
    </div>
  );
}

export default Menu;

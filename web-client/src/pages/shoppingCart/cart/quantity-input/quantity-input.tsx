import React from "react";
import "./styles.scss";

type QuantityInputProps = {
  productQuantity: number;
  onQuantityChange: (productQuantity: number) => void;
};

export default function QuantityInput(props: QuantityInputProps) {
  return (
    <div className="quantity_change-wrapper">
      <div className="quantity_change-block">
        <div className="quantity_change-minus" onClick={() => props.onQuantityChange(props.productQuantity - 1)}>
          -
        </div>
        <div className="quantity_value">{props.productQuantity}</div>
        <div className="quantity_change-plus" onClick={() => props.onQuantityChange(props.productQuantity + 1)}>
          +
        </div>
      </div>
    </div>
  );
}

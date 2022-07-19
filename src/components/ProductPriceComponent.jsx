import React from "react";
import { useContext } from "react";
import UserData from "../contexts/UserData";

const Price = () => {
  let context = useContext(UserData);
  return (
    <div>
      <h2 className="is-size-4">
        <strong>Price</strong>: ${context.productInfo.price}
      </h2>
    </div>
  );
};

export default Price;

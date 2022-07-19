import React from "react";
import { useContext } from "react";
import UserData from "../contexts/UserData";

const ProductNameComponent = () => {
  let context = useContext(UserData);
  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        <strong>Name</strong>: {context.productInfo.name}
      </h2>
    </div>
  );
};

export default ProductNameComponent;

import React from "react";
import { useContext } from "react";
import UserData from "../contexts/UserData";

const Form = () => {
  let context = useContext(UserData);
  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label">Update Item Name: </label>
        <input
          className="input"
          id="itemName"
          onChange={(e) => {
            let copyUserData = { ...context.productInfo };
            copyUserData.name = e.target.value;
            context.setProductInfo(copyUserData);
          }}
        />
      </div>
      <div className="input-item">
        <label className="label">Update Price: </label>
        <input
          type="number"
          className="input"
          id="itemPrice"
          onChange={(e) => {
            let copyUserData = { ...context.productInfo };
            copyUserData.price = e.target.value;
            context.setProductInfo(copyUserData);
          }}
        />
      </div>
    </div>
  );
};

export default Form;

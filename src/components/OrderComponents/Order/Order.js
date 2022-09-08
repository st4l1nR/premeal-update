import React from "react";
import OrderNavigation from "../OrderNavigation/OrderNavigation";
import OrderStepper from "../OrderStepper/OrderStepper";
import "./Order.css";

const Order = () => {
  return (
    <div>
      <OrderNavigation />
      <OrderStepper />
    </div>
  );
};

export default Order;

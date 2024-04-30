import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="placeOrder">
      <div className="placeOrder-left">
        <h2>Delivery Informations</h2>
        <div className="multi-field">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="multi-field">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="placeOrder-right">
        <div className="cartTotals">
          <h2>Cart Totals</h2>
          <div className="cartTotals-line">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartTotals-line">
            <p>Delivery Fee</p>
            <p>$2</p>
          </div>
          <hr />
          <div className="cartTotals-line total-line">
            <p>Total</p>
            <p>${getTotalCartAmount() + 2}</p>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

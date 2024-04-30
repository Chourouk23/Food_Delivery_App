import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const { removeFromCart, cartItems, getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cartItems">
        <div className="cartItems-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-item cartItems-title">
                  <img src={item.image} alt="" />
                  <p key={index}>{item.name}</p>
                  <p key={index}>${item.price}</p>
                  <p key={index}>{cartItems[item._id]}</p>
                  <p key={index}>${item.price * cartItems[item._id]}</p>
                  <p
                    className="remove"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
            <p>${getTotalCartAmount() +2}</p>
          </div>
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartPromo-code">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartPromo-code-input">
            <input placeholder="promo code"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

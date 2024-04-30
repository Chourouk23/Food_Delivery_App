import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = ({ id, name, description, price, image }) => {
  const [itemCount, setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add-btn"
            src={assets.add_icon_white}
            onClick={() =>addToCart(id)}
          />
        ) : (
          <div className="count-container">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="rating">
          <p className="name">{name}</p>
          <img src={assets.rating_starts} className="rating-img" alt="" />
        </div>
        <p className="description">{description}</p>
        <p className="price">$ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

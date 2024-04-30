import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css"
const ExploreMenu = ({category,onChangeCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p>
        Choose from a diverse meu featuring a delectable array of dishes crafted
        with th finest ingredients
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div className="explore-menu-item" onClick={()=>onChangeCategory(prev=>prev===item.menu_name ? "" : item.menu_name)}>
              <img className={category===item.menu_name ? "active1" : ""} src={item.menu_image} alt="" />
              <h6 key={index}>{item.menu_name}</h6>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

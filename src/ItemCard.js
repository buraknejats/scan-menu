import { AddRounded, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { actionType } from "./Reducer";
import { useStateValue } from "./StateProvider";
import { Items } from "./Data";
import { useEffect } from "react";
let cartData = [];

function ItemCard({ itemId, imgSrc, name, price }) {
  const [{}, dispatch] = useStateValue();
  const [isCart, setCart] = useState(null);

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);
  return (
    <div className="itemCard" id={itemId}>
      <div className="isfavpurite"></div>
      <div className="imgBox">
        <img className="itemImg" src={imgSrc} alt="" />
      </div>
      <div className="itemContent">
        <h3 className="itemName"> {name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i key={i} className="rating">
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              {price}
              <span> ₺</span>
            </h3>
          </div>
          <i
            className="addToCart"
            onClick={() => {
              setCart(Items.find((n) => n.id === itemId));
            }}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

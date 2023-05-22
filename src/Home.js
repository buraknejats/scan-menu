import React from 'react'

  import { useEffect, useState } from "react";
  import BannerName from "./BannerName";
  import "./home.css"

  import bannerImg from "../src/img/bannerImage.png";
  import SubMenuContainer from "./SubMenuContainer";
  import ItemCard from "./ItemCard";
  import MenuCard from "./MenuCard";
  import { MenuItems, Items } from "./Data";
  import DebitCard from "./DebitCard";
  import CartItem from "./CartItem";
  import { useStateValue } from "./StateProvider";
 
function Home() {
    const [isMainData, setMainData] = useState(
        Items.filter((element) => element.itemId == "buger01")
      );
    
      const [{ cart, total }, dispatch] = useStateValue();
      const [totalPrice, setTotalPrice] = useState(0);
    
      useEffect(() => {
        const menuLi = document.querySelectorAll("#menu li");
    
        function setMenuActive() {
          menuLi.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
    
        // menu Card active class changer
        const menuCard = document
          .querySelector(".rowContainer")
          .querySelectorAll(".rowMenuCard");
    
        function setMenuCardActive() {
          menuCard.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
      }, [isMainData, cart, total, totalPrice]);
    
      const setData = (itemId) => {
        setMainData(Items.filter((element) => element.itemId == itemId));
      };
  return (
    <div className='App'>
      {/* Main Container*/}
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"Burak"} discount={"50"} link={"#"} />
            <img className="bannerImg" src={bannerImg} alt="banner" />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Kategori"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="dishitemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {!cart ? (
            <div className="addSomeItem">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
              alt=""
              className="emptyCart"
            />
          </div>
          ) : (
            <div className="cartCheckOutContainer">
              <SubMenuContainer name={"Carts Items"} />
              <div className="cartContainer">
                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Toplam</h3>
                <p>
                  <span>{total} ₺</span>
                </p>
              </div>
              <button className="checkOut">Sipariş Ver</button>
            </div>
          )}
        </div>
      </main>
      {/* Bottom Menu */}

      
    </div>
  )
}

export default Home
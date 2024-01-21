import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../context/BaskerProvider";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlsitProvider";

function Clothes() {
  const [apiData, setApiData] = useState([]);
  const {wishlist, handleWishlist} = useContext(WishlistContext)
  const {basket, addToBasket} = useContext(BasketContext)

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("http://localhost:3100/");
    const data = await res.json();
    setApiData(data);
  }

  return (
    <section id="Clothes">
      <div className="clothesTitle">
        <span>POPULAR PRODUCTS</span>
        <h2>Our Products</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe fugiat
          aliquid blanditiis, dolorem animi id officia. Ipsum odit sunt
          aspernatur maiores cupiditate?
        </p>
      </div>
      <div className="clothesWrapper">
        {apiData.map((x) => (
          <div className="clothesCard" key={x._id}>
            <img src={x.img} alt="" />
            <div className="productCardInfo">
            <div className="ratingCard">
            <i className="fa-solid fa-star"></i>
            <p>5.0</p>
            </div>
            <div className="ratingCard">
              <i onClick={()=>handleWishlist(x)} className={wishlist.some((item)=>item._id === x._id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
              <p>29</p>
            </div>
            </div>
            <h3>{x.name}</h3>
            <p>{x.desc}</p>
            <div className="clothesCardButtons">
              <button className="basketButton" onClick={()=>addToBasket(x)}>CART</button>
              <Link to={`/Detail/${x._id}`}><button className="detailButton">VIEW</button></Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clothes;

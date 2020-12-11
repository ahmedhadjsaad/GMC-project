import React from "react";
import Solaire from "./SolarProduct";
import TopCategory from "./TopCategory";
import Visage from "./FaceProduct";
import Hair from "./Hair";
// import AllCategory from "./AllCategory";
const Main = () => {
  return (
    <div className="main-ctn">
      <div className="image-background">
        <div className="choice-product">
          <h1> BIG CHOICE OF PARAMEDICAL PRODUCTS</h1>
        </div>
        <button className="btn-shop">
          {" "}
          <strong> Shop now </strong>{" "}
        </button>
      </div>
      <div className="détails-ctn">
        <div className="livraison">
          <i class="fas fa-people-carry"></i>
          <h2> Free Shipping </h2>
          <h3> For orders from 50 TND </h3>
        </div>
        <div className="paiement">
          <i class="fas fa-credit-card"></i>
          <h2> Secure Payment </h2>
          <h3> 100% secure payment </h3>
        </div>
        <div className="support">
          <i class="fas fa-comments"></i>
          <h2> 24/7 Support </h2>
          <h3> Dedicated support </h3>
        </div>
        <div className="échange">
          <i class="fas fa-sync-alt"></i>
          <h2> 90 Days Return </h2>
          <h3> If goods have problems </h3>
        </div>
      </div>
      <TopCategory/>
      <Visage/>
      <Solaire />
      <Hair/>
      {/* <AllCategory/> */}
    </div>
  );
};

export default Main;

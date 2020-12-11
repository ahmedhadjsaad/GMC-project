import React from "react";


const AllCategory = (props) => {
  return (
    <div>
      <div className="bg-ctn">
        <h1> Category </h1>
      </div>

      <div className="dashboard-grid">
        <div className="Grid-num1">
          <i class="fas fa-clinic-medical"></i>{" "}
          <div className="A">
            <span>
              {" "}
              <strong>Materiels Medical</strong>{" "}
            </span>
            <span>Fn</span>
          </div>
        </div>
        <div className="Grid-num2">
          <i class="fas fa-baby"></i>{" "}
          <div className="A">
            <span>
              {" "}
              <strong> Bébé & Maman </strong>{" "}
            </span>
            <span>Prodcuts </span>
          </div>
        </div>
        <div className="Grid-num3">
          <i class="fas fa-smile-wink"></i>{" "}
          <div className="A">
            <span>
              {" "}
              <strong>Visage</strong>{" "}
            </span>
            <span>Fn</span>
          </div>
        </div>
        <div className="Grid-num4">
          <i class="fas fa-umbrella-beach"></i>{" "}
          <div className="A">
            <span>
              {" "}
              <strong> Solaire </strong>{" "}
            </span>
            <span>Fn</span>
          </div>
        </div>
        <div className="Grid-num5">
          <i class="fas fa-shoe-prints"></i>{" "}
          <div className="A">
            <span>
              {" "}
              <strong> Chaussures</strong>{" "}
            </span>
            <span>Fn</span>
          </div>
        </div>
        <div className="Grid-num6">
          <i class="fab fa-pagelines"></i>{" "}
          <div className="A">
            <span>
              {" "}
              <strong> Nature Bio </strong>{" "}
            </span>
            <span>Fn</span>
          </div>
        </div>
        <div className="Grid-num7">
          <i class="fas fa-hand-holding-medical"></i>{" "}
          <div className="A">
            <span>
              {" "}
              <strong> Soin de corp </strong>{" "}
            </span>
            <span>Fn</span>
          </div>
        </div>
        <div className="Grid-num8">
          <i class="fas fa-medkit"></i>{" "}
          <div className="A">
            <span> <strong> Santé & Bien etre </strong></span>
            <span>Fn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategory;

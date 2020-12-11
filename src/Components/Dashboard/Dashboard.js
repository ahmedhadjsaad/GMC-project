import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  addProduct,
  deleteProduct,
  fetchCommande,
  fetchProducts,
  getProfile,
  userTotal,
} from "../../JS/actions/actions";
import Product from "../Product-cart";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [dashboradSection, setDashboradSection] = useState(1);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const commandeList = useSelector((state) => state.commandeReducer.commandes);
  const productList = useSelector((state) => state.productReducer.products);
  const isLoading = useSelector((state) => state.userReducer.loading);
  const usersTotal = useSelector((state) => state.userReducer.usersTotal);
  // const [fileInputState, setFileInputState] = useState('')
  // const [selectedFile, setSelectedFile] = useState('')
  // const [previewSource, setPreviewSource] = useState()
  const [Category, setCategory] = useState();
  const [Name, setName] = useState();
  const [Image, setImage] = useState();
  const [Prix, setPrix] = useState();
  const [Rating, setRating] = useState();
  const [Qtn, setQtn] = useState();

  // const handleFileInputChange = (e) => {
  //   const file =  e.target.files[0];
  //   previewFile(file)
  // }
  // const previewFile = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPreviewSource(reader.result)
  //   }
  // }
  const data = [
    { name: "Products", value: productList.length, fill: "#4643E3" },
    {
      name: "Revenue",
      value: commandeList.reduce((a, b) => a + b.total, 0),
      fill: "#33B87A",
    },
    { name: "Users", value: usersTotal, fill: "#F32950" },
    { name: "Orders", value: commandeList.length, fill: "#FA6E22" },
  ];
  {
    console.log("usersTotal", usersTotal);
  }
  useEffect(() => {
    dispatch(getProfile());
    console.log("isAuth", isAuth);
  }, []);

  useEffect(() => {
    dispatch(fetchCommande());
    dispatch(userTotal());
  }, [usersTotal]);

  const addToProducts = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        Category,
        Name,
        Image,
        Prix,
        Rating,
        Qtn,
      })
    );
  };

  const renderBlock = (dashboradSection) => {
    if (dashboradSection === 1) {
      return (
        <div>
          <div className=" text-center">
            {/* <h3>Dynamical Data</h3> */}
            <div className="piechart container-fluid">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey={"value"}
                  isAnimationActive={true}
                  data={data}
                  cx={200}
                  cy={200}
                  outerRadius={80}
                  fill="#8884D8"
                  label
                />
                <Tooltip />
              </PieChart>
              <BarChart
                isAnimationActive={true}
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="value"
                  fill="#8884D8"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </div>
          </div>
          {/* {commandeList.map((el) => (
            <div>
              {el.name}
              {el.familyName}
              {el.cartItems.map((el) => (
                <div>
                  {el.Name}
                  {el.Qtn}
                </div>
              ))}
              <h1>{el.total}</h1>
            </div>
          ))} */}
          <h3>Total : {commandeList.reduce((a, b) => a + b.total, 0)} </h3>
        </div>
      );
    }
    if (dashboradSection === 2) {
      return (
        <div>
          <div className="lg-ctn">
            <input
              class="ant-input form-control"
              type="text"
              placeholder="Category ..."
              onChange={(e) => setCategory(e.target.value)}
            ></input>
            <input
              class="ant-input form-control"
              type="text"
              placeholder="Name ..."
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              // value={fileInputState}
              class="ant-input form-control"
              type="text"
              placeholder="Image ..."
              onChange={(e) => setImage(e.target.value)}
              // onChange={handleFileInputChange}
            ></input>
            {/* <button>Submit</button>
            {previewSource && (
              <img src={previewSource} alt="" style= {{height:'300px'}}/>
            )} */}
            <input
              class="ant-input form-control"
              type="text"
              placeholder="Prix ..."
              onChange={(e) => setPrix(e.target.value)}
            ></input>
            <input
              class="ant-input form-control"
              type="text"
              placeholder="Rating ..."
              onChange={(e) => setRating(e.target.value)}
            ></input>
            <input
              class="ant-input form-control"
              type="text"
              placeholder="Qtn ..."
              onChange={(e) => setQtn(e.target.value)}
            ></input>
            <button onClick={addToProducts} className="btn-login">
              {" "}
              ADD PRODUCT{" "}
            </button>
          </div>
        </div>
      );
    }
    if (dashboradSection === 3) {
      return (
        <div className="dashboard-remove">
          {productList.map((el) => (
            <div>
              <div>
                <img src={el.Image} alt="" />
                <h3>{el.Name}</h3>
                <h3>{el.Prix} TND </h3>
                <button
                  onClick={() =>
                    dispatch(deleteProduct(el._id), fetchProducts())
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }
    if (dashboradSection === 4) {
      return (
        <div>
          <div className="dashboard-remove">
            {productList.map((el) => (
              <Product product={el} />
            ))}
          </div>
        </div>
      );
    }
  };

  if (!isLoading) {
    console.log("isAuth", isAuth);
  }
  return (
    <div>
      {isLoading ? (
        <h2>Please wait</h2>
      ) : (
        isAuth &&
        (isAuth.role === "admin" ? (
          <div className="dashboard-gird">
            <div className="grid-dashboard-num1">
              <h1 onClick={() => setDashboradSection(1)}>Commandes</h1>
              <h1 onClick={() => setDashboradSection(2)}>ADD PRODUCT</h1>
              <h1 onClick={() => setDashboradSection(3)}>DELETE PRODUCT</h1>
              <h1 onClick={() => setDashboradSection(4)}>UPDATE PRODUCT</h1>
            </div>
            <div className="grid-dashboard-num2">
              <div>{renderBlock(dashboradSection)}</div>
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        ))
      )}
    </div>
  );
};

export default Dashboard;

import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import { fetchProducts } from "./JS/actions/actions";
import { useDispatch } from "react-redux";
import CartItems from "./Components/Cart/CartItems";
import Category from "./Components/Pages/Category";
import Dashboard from "./Components/Dashboard/Dashboard";
import CartWishList from "./Components/Cart/CartWishList";
import SearchResult from "./Components/Pages/SearchResult";
import Procede from "./Components/Cart/Procede";
// import Footer from "./Components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <div className="grid-ctn">
        <header>
          <Header />
        </header>

        <main>
          <Route exact path="/" component={Main} />

          <Route
            exact
            path="/Category/:Category"
            component={(props) => <Category {...props} />}
          />

          <Route exact path="/Dashboard" component={Dashboard} />

          <Route exact path="/Cart" component={CartItems} />

          <Route exact path="/Wishlist" component={CartWishList} />

          <Route exact path="/Login" component={Login} />

          <Route exact path="/Search" component={SearchResult}/>

          <Route exact path="/Register" component={Register} />

          <Route exact path='/Procede' component={Procede}/>

        </main>

        <footer></footer>
      </div>

    </Router>
    
  );
}

export default App;

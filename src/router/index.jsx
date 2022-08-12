import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "../components";
// import { Login, MainApp } from "../pages";
// import Login from "../page/Login"
import Dashboard from "../page/Dashboard"
// import PrivateRoute from "../component/atoms/PrivateRoute"
// import MainApp from "../main"
import Public from "../page/Public";
import ShippingComps from "../page/Shipping Comps";
import Layout from "../component/view/layout";
import AddShippingComps from "../page/Add Shipping Comps"
// import { createStore } from "../store";
// import  {Provider}  from "redux";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducer";
import thunk from "redux-thunk";

// import { Provider } from "react";
const store = createStore(reducer, applyMiddleware(thunk));

export default function Routers() {
  return (
    <Provider store={store}>
      <Router>

        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shipping-comps" element={<ShippingComps />} />
            <Route path="/add-shipping-comps" element={<AddShippingComps />} />
            <Route path="/edit-shipping-comps" element={<AddShippingComps />} />


            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Route>
          <Route exact path='/login' element={<Public />} />
          <Route exact path='/profile' element={<Public />} />

        </Routes>
      </Router>
    </Provider>

  );
}

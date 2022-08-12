import React from "react";
// import { Layout, PrivateRoute } from "../../components";
import Layout from "../component/view/layout"
import PrivateRoute from "../component/atoms/PrivateRoute";
import { BrowserRouter as Router, Switch, useHistory,Routes } from "react-router-dom";
import Dashboard from "../page/Dashboard";
import { StylesProvider, createGenerateClassName } from '@mui/styles';

// import { ExitToApp } from "@material-ui/icons";
// import {
//   Dashboard,
//   InputSupport,
//   InputPemeliharaan,
//   InputProduksi,
//   History,
//   ListPemeliharaan,
//   ListSupport,
//   InputMasterBank,
//   InputMasterTanggal,
//   ListMasterTanggal,
//   ListMasterBank,
// } from "../../pages";
// import { StylesProvider, IconButton } from "@material-ui/core";
// import "../../assests/styles/list.css";
// import "../../assests/styles/input.css";
// import "../../assests/styles/layout.css";


const MainApp = () => {
//   let history = useHistory();

  return (
    <>
      {/* <IconButton
        style={{
          color: "#FFFF",
          zIndex: 2000,
          position: "absolute",
          top: "8px",
          right: "10px",
        }}
        onClick={() => {
          localStorage.removeItem("token");
          history.push("login");
        }}
      >
        <ExitToApp className="logout" />
      </IconButton> */}

      <Router>
        <StylesProvider injectFirst>
          <Layout>
            <Routes>
              <PrivateRoute
                path="/"
                
                // role={["prod", "admin", "supp", "pml"]}
              >
                <Dashboard />
              </PrivateRoute>
             
            </Routes>
          </Layout>
        </StylesProvider>
      </Router>
    </>
  );
};

export default MainApp;

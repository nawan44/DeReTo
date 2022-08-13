import React from "react";
import Layout from "../component/view/layout"
import PrivateRoute from "../component/atoms/PrivateRoute";
import { BrowserRouter as Router, Switch, useHistory,Routes } from "react-router-dom";
import DashboardEmpty from "../page/DashboardEmpty";
import { StylesProvider, createGenerateClassName } from '@mui/styles';


const MainApp = () => {

  return (
    <>
      <Router>
        <StylesProvider injectFirst>
          <Layout>
            <Routes>
              <PrivateRoute
                path="/" >
                <DashboardEmpty />
              </PrivateRoute>
            </Routes>
          </Layout>
        </StylesProvider>
      </Router>
    </>
  );
};

export default MainApp;

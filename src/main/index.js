import React from "react";
import Layout from "../component/view/layout"
import PrivateRoute from "../component/atoms/PrivateRoute";
import { BrowserRouter as Router, Switch, useHistory,Routes } from "react-router-dom";
import Activity from "../page/Activity";
import { StylesProvider, createGenerateClassName } from '@mui/styles';


const MainApp = () => {

  return (
    // <>
      <Router>
        <StylesProvider injectFirst>
          <Layout>
            <Routes>
              <PrivateRoute
                path="/" >
                <Activity  class="dashboard-content"/>
              </PrivateRoute>
            </Routes>
          </Layout>
        </StylesProvider>
      </Router>
    // </>
  );
};

export default MainApp;

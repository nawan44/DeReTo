import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../component/layout/index.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducer";
import thunk from "redux-thunk";
import TodoEmptyState from "../page/TodoEmptyState";
// import TodoE
import Activity from "../page/Activity";

const store = createStore(reducer, applyMiddleware(thunk));

export default function Routers() {
  return (
    <Provider store={store}>
      <Router>

        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Activity />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/detail/:id" element={<TodoEmptyState />} />

            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Route>

        </Routes>
      </Router>
    </Provider>

  );
}

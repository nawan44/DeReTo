import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardEmpty from "../page/DashboardEmpty"
import Layout from "../component/view/layout";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducer";
import thunk from "redux-thunk";
import NewActivity from "../page/NewActivity";
import ItemList from "../page/ItemList";
import ListActivity from "../page/ListActivity";

const store = createStore(reducer, applyMiddleware(thunk));

export default function Routers() {
  return (
    <Provider store={store}>
      <Router>

        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<DashboardEmpty />} />
            <Route path="/dashboard-empty" element={<DashboardEmpty />} />
            <Route path="/list-activity" element={<ListActivity />} />
            <Route path="/new-activity" element={<NewActivity />} />
            <Route path="/item-list" element={<ItemList />} />

            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Route>

        </Routes>
      </Router>
    </Provider>

  );
}

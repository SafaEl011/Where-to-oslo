import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CategoryView,
  IntroView,
  MapView,
  SearchView,
  SettingView,
  Top5View,
} from "../views";

const RoutingMain = () => {
  return (
    <BrowserRouter>

        <Routes>
          {/* <Route path="tutorial" element={<IntroView />}></Route> */}
          <Route path="/" element={<MapView />}></Route>
          <Route path="search" element={<SearchView />}></Route>
          <Route path="categories" element={<CategoryView />}></Route>
          <Route path="top5" element={<Top5View />}></Route>
          <Route path="settings" element={<SettingView />}></Route>
        </Routes>
      

    </BrowserRouter>
  );
};

export default RoutingMain;

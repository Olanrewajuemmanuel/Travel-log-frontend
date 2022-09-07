import { Route, Routes } from "react-router-dom";
import { AddTravelLog } from "./pages/AddTravelLog";
import Header from "./components/Header";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import routes from "./routes";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { TravelLog, TravelLogState } from "./types";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import { FeedContext, initialState } from "./store";
import { Cookies, withCookies } from "react-cookie";

type TravelLogContext = {
  logs: TravelLogState;
};

type User = {
  user: {
    id?: string;
    username?: string;
    email?: string;
  };
};
function App({ cookies }: any) {

  return (
    <FeedContext.Provider value={initialState}>
      <Header />
      <div className="container text-gray-600 min-h-screen max-w-[780px] mx-auto scroll-smooth">
        <main className="overflow-auto pb-[80px] p-5">
          <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.ADD_TRAVEL_LOG} element={<AddTravelLog />} />
            <Route path={routes.PROFILE} element={<Profile />} />
            <Route path={routes.LOGIN} element={<Login />} />
            <Route path={routes.REGISTER} element={<RegisterUser />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </main>
      </div>
      {cookies.get("accessToken") ? <NavBar /> : ""}
    </FeedContext.Provider>
  );
}

export default withCookies(App);

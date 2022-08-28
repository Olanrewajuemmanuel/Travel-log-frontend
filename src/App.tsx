import { Route, Routes } from "react-router-dom";
import { AddTravelLog } from "./pages/AddTravelLog";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import routes from "./routes";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { TravelLog, TravelLogState } from "./types";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";


type TravelLogContext = {
  logs: TravelLogState;
};

type User = {
  user: {
    id?: string;
    username?: string;
    email?: string;
  }
}
function App() {
  const [logs, setLogs] = useState<TravelLogState>([]);
  const [authUser, setAuthUser] = useState<User>({
    user: {}
  })
  const UserContext = createContext<TravelLogContext>({
    logs,
  });

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:4000/feed/",
  //   })
  //     .then((res) => {
  //       setLogs(res.data)
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

//   {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjMwOGRkOGU0OGFhOGIxNzM2MjZlODAzIiwiaWF0IjoxNjYxNTI1MzkwLCJleHAiOjE2NjE1Mjg5OTB9.nNpFavcILOmDrVoP0UxOAUjTf09swXXhRhi2O6n9xVM",
//     "refreshtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjMwOGRkOGU0OGFhOGIxNzM2MjZlODAzIiwiaWF0IjoxNjYxNTI1MzkwLCJleHAiOjE2NjE3ODQ1OTB9.uJShBzj-uq3_m-zvUBFWbm8RAxq-u9G_3qVf8GGrArw",
//     "user": {
//         "id": "6308dd8e48aa8b173626e803",
//         "username": "Obasanjo",
//         "email": "obasanjo@gmail.com"
//     }
// }
  return (
    <UserContext.Provider value={{ logs }}>
      <Header />
      <div className="container text-gray-600 min-h-screen max-w-[780px] mx-auto scroll-smooth">
        <main className="overflow-auto pb-[80px] p-5">
          <Routes>
            <Route path={routes.HOME} element={<Home logs={logs} />} />
            <Route path={routes.ADD_TRAVEL_LOG} element={<AddTravelLog />} />
            <Route path={routes.PROFILE} element={<Profile />} />
            <Route path={routes.LOGIN} element={<Login />} />
            <Route path={routes.REGISTER} element={<RegisterUser />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </main>
      </div>
      {authUser.user.id ? <NavBar /> : ''}
    </UserContext.Provider>
  );
}

export default App;

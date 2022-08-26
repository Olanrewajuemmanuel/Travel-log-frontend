import { Route, Routes } from "react-router-dom";
import { AddTravelLog } from "./pages/AddTravelLog";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import routes from "./routes";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { TravelLog, TravelLogState } from "./types";

type TravelLogContext = {
  logs: TravelLogState;
}

function App() {
  const [logs, setLogs] = useState<TravelLogState>([])
  const UserContext = createContext<TravelLogContext>({
    logs,
  })

  useEffect(() => {

  }, [])

  return (
    <UserContext.Provider value={{ logs }}>
      <Header />
      <div className="container text-gray-600 min-h-screen max-w-[780px] mx-auto">
        <main className="overflow-auto pb-[80px] p-5">
          <Routes>
            <Route path={routes.HOME} element={<Home logs={logs}/>} />
            <Route path={routes.ADD_TRAVEL_LOG} element={<AddTravelLog />} />
            <Route path={routes.PROFILE} element={<Profile />} />
          </Routes>
        </main>
      </div>
      <NavBar />
    </UserContext.Provider>
  );
}

export default App;

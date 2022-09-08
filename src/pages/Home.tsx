import { LogActionType, TravelLog, TravelLogState } from "../types";
import { Feed } from "../components/Feed";
import React, { Consumer, Provider, useContext, useEffect, useReducer, useState } from "react";
import { FeedContext, initialState, reducer } from "../store";
import { axiosPrivate } from "../axiosClient";
import routes from "../routes";
import { Navigate } from "react-router-dom";
import { withCookies } from "react-cookie";

const Home: React.FC = ({ cookies }: any) => {
  const [error, setError] = useState({
    message: ''
  })
  const [logs, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const fetchData = async () => {
      const feeds = await (await axiosPrivate.get("/feed")).data;
      return Promise.resolve(feeds);
    };
    fetchData()
      .then((feeds) => {
        // update store     
       
        dispatch({ type: LogActionType.UPD_STORE, payload: { feeds } })
      })
      .catch(async (err) => {
        if (err.code === "ERR_NETWORK") {
          setError({ message: "Network error, please ty again later." })
        } else {
          setError({ message: err.message })
        }
        
      });
      return () => {
        // clean up
      }
  }, []);
  if (!cookies.get("accessToken")) return <Navigate to={routes.LOGIN} />
  return (
    <div className="md:flex justify-center items-center flex-col">
      <p>{ error.message ? error.message: '' }</p>
      {
        logs.map((log, index) => 
          <Feed key={index} log={log} />
        )
      }
    </div>
  );
};

export default withCookies(Home)

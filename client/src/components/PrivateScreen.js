import { useState, useEffect } from "react";
import React from 'react';
import axios from "axios";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import NewApp from './newfolder/NewApp';

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if(!localStorage.getItem("authToken")) {
      history.push("/")
    }

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        history.push("/");
      }
    };

    fetchPrivateDate();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/home");
  }

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div> 
      <Router>
        <Route exact path="/" component={NewApp} />
      </Router>
      <button onClick={logoutHandler}>Logout</button>
      </div>
    </>
  );
};

export default PrivateScreen;

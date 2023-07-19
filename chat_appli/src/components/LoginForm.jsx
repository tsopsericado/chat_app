import React from "react";
import { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "8f75e0ff-1073-4386-a304-ba5b358418ae",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https:api.chatengine.io/chats", { headers: authObject });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="form">
          <h1 className="title">Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={'username'}
              onchange={(e) => setUserName(e.target.value)}
              className="input"
              placeholder="username"
              required
            />
            <input
              type="password"
              // value={password}
              onchange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="password"
              required
            />
            <div align="center">
              <button type="submit" className="button">
                <span>Start Chatting</span>
              </button>
            </div>
            <h2 className="error">{error}</h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

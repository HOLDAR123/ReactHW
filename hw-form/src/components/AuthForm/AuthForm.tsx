import React, { useState } from "react";
import axios from "axios";

const AuthForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setLoginError(false);

    try {
      const response = await axios.get("http://localhost:8080/users");
      const userData = response.data;
      console.log(userData);

      if (username === userData.fullName && password === userData.password) {
        setIsLoading(false);
        setLoginSuccess(true);
        return;
      }

      throw new Error("Invalid login credentials");
    } catch (error) {
      setLoginError(true);
    }

    setIsLoading(false);
  };

  return (
    <div>
      {loginSuccess ? (
        <div className="success">Login successful! Welcome back.</div>
      ) : (
        <>
          <div className="form-group">
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
          </div>
          {loginError && (
            <div className="error">Invalid login credentials.</div>
          )}
          <button type="button" onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Authenticating..." : "Login"}
          </button>
        </>
      )}
    </div>
  );
};

export default AuthForm;

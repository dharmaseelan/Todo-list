import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./../assets/images/logo.png";
import login from "./../assets/images/login.svg";
import { useDispatch } from "react-redux";

const mockUser = {
  firstname: "Dharma",
  lastname: "Seelan",
  email: "dharma@gmail.com",
  password: "1234",
  phone: "+60123456789",
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
};

function Login() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === mockUser.email && password === mockUser.password) {
      dispatch({
        type: "LoginUser",
        user: mockUser,
      });
      history.push("/");
    }
  };
  return (
    <div className="login">
      <div className="login-form animate__animated animate__fadeInLeft">
        <form onSubmit={handleLogin}>
          <article>
            <figure className="logo m-0">
              <img src={logo} alt="logo" />
            </figure>
            <h1>Welcome Back</h1>
            <p>Log In to organize it all with Todoist.</p>
          </article>
          <dl>
            <dd>
              <input
                type="email"
                placeholder="Email"
                onChange={({ target }) => setEmail(target.value)}
              />
            </dd>
            <dd>
              <input
                type="password"
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </dd>
            <dd>
              <button type="submit" className="btn-primary">
                Log in
              </button>
            </dd>
          </dl>
        </form>
      </div>
      <div className="welcome-wrapper animate__animated animate__fadeInRight">
        <figure className="banner m-0 animate__animated animate__fadeIn">
          <img src={login} alt="login" />
        </figure>
      </div>
    </div>
  );
}
export default Login;

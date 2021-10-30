import logo from "./../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Header() {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({
      type: "LogoutUser",
    });
    history.push("/login");
  };

  return (
    <div className="header animate__animated animate__fadeInDown">
      <div className="container">
        <div className="wrapper">
          <figure className="logo m-0">
            <NavLink to="/">
              <img src={logo} alt="logo" to="/" />
            </NavLink>
          </figure>
          <div className="nav">
            <NavLink to="/profile" activeClassName="is-active">
              profile
            </NavLink>
            <button className="logout" onClick={handleLogout}>
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

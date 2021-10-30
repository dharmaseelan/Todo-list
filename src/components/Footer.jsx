import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper container">
        <div className="f-link">
          <NavLink to="/privacy" activeClassName="is-active">
            Privacy
          </NavLink>
          <NavLink to="/support" activeClassName="is-active">
            Support
          </NavLink>
        </div>
        <p>© Todoist.</p>
      </div>
    </div>
  );
}

export default Footer;

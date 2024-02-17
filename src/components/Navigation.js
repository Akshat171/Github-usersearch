import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-bar">
      <NavLink
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
        to="/user"
      >
        Profile
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "active nav-link" : "nav-link"
        }
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
};

export default Navigation;

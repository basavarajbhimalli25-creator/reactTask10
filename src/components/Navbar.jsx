import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        User<span>App</span>
      </div>

      <div className="nav-links">
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
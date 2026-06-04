// NavBar.jsx
import { Link } from "react-router-dom";
import "./navbar.css"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary border-opacity-25 px-4 py-3 shadow">
      <div className="container-fluid">
        {/* Brand Logo  */}
        <Link className="navbar-brand fw-bold fs-4 text-white text-gradient" to="/">
          TaskFlow
        </Link>

        {/* Mobile Toggler  */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center gap-2 gap-lg-3 mt-3 mt-lg-0">
            
            {/* Dashboard Link */}
            <li className="nav-item">
              <Link className="nav-link text-white-50 dashboard-hover px-3 py-2 rounded" to="/">
                Dashboard
              </Link>
            </li>

            {/* Login Button */}
            <li className="nav-item w-100 w-lg-auto">
              <Link className="btn btn-outline-light btn-sm px-3 py-2 w-100 spec-btn" to="/login">
                Login
              </Link>
            </li>

            {/* Register Button */}
            <li className="nav-item w-100 w-lg-auto">
              <Link className="btn btn-primary btn-sm px-3 py-2 w-100 shadow-sm spec-btn fw-semibold" to="/register">
                Register
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
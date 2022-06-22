import { NavLink } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <header>
      <nav>
        <span>
          <NavLink
            className="custom-link"
            activeStyle={{
              color: "blue"
            }}
            to="/home"
          >
            home
          </NavLink>
        </span>
        <span>
          <NavLink
            className="custom-link"
            activeStyle={{
              color: "blue"
            }}
            to="/product"
          >
            product
          </NavLink>
        </span>
      </nav>
    </header>
  );
}

export default Header;

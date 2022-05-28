import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

function Navbar() {
  const handleClick = () => {
    document.getElementById("cart-container").classList.toggle("hidden");
    console.log(document.getElementById("cart-container").classList);
  };
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link className="navbar__list__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar__list__link" to="staff">
            Staff
          </Link>
        </li>
        <li>
          <Link className="navbar__list__link" to="*">
            Bad
          </Link>
        </li>
      </ul>
      <button className="navbar__cart-btn" onClick={handleClick}>
        <BsCart2 size={25} />
      </button>
    </nav>
  );
}

export default Navbar;

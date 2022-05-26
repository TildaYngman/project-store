import { Link } from "react-router-dom";
import { BsCart2 } from 'react-icons/bs';

function Navbar() {

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li>
                    <Link className ="navbar__list__link" to="/" >Home</Link>
                </li>
                <li>
                    <Link className ="navbar__list__link" to="staff">Staff</Link>
                </li>
                <li>
                    <Link className ="navbar__list__link" to="*">Bad</Link>
                </li>
                <section className="navbar-container__cart-icon"><BsCart2/></section>
            </ul>
        </nav>
    )
}

export default Navbar;
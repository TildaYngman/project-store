import { Link } from "react-router-dom";


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
            </ul>
        </nav>
    )

}

export default Navbar;
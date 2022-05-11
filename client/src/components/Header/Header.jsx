import { Navbar } from "../../components";

function Header() {
    return (
        <div className="navbar-container">
            <h1 className="navbar-container__logo">
                The Skii Shop!
            </h1>
            <Navbar />
        </div>
    )
}

export default Header;
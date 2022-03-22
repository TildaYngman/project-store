import { Navbar } from "../../components";

function Header() {
    return (
        <main className="navbar-container">
            <h1 className="navbar-container__logo">
                The Skii Shop!
            </h1>
            <Navbar />
        </main>
    )
}

export default Header;
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <main>
            <nav>
                <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="staff"><li>Staff</li></Link>
                <Link to="*"><li>Bad</li></Link>
                </ul>
            </nav>
        </main>
    )

}

export default Navbar;
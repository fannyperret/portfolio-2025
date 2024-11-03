import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Root() {
    return (
        <>
            <nav>
                <img src={logo} alt="Logo" />
                <ul>
                    <li>
                        <Link to={`about`}>About</Link>
                    </li>
                    <li>
                        <Link to={'skills'}>Skills</Link>
                    </li>
                    <li>
                        <Link to={'contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <header>
    <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/allmovies">All Movies</NavLink>

    </nav>
  </header>
}

export default Navbar
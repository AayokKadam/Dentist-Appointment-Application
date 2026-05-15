import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🦷 MR.DENTIST
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/App">Appointment</Link>
        </li>

        <li>
          <Link to="/Ser">Services</Link>
        </li>

        <li>
          <Link to="/Con">Contact</Link>
        </li>

        <li>
          <Link to="/Abo">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
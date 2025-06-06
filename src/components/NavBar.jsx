// components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../styles/home.css'

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

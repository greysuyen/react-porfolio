// components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import '../styles/home.css'
import '../styles/nav.css'
function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink> 
      <NavLink to="/about">About</NavLink> 
      <NavLink to="/projects">Stacks & Builds</NavLink>
    </nav>
  );
}

export default Navbar;

import { NavLink } from 'react-router';
import ShowClock from './ShowClock';
import { useState } from 'react';
import './NavBar.css';

function NavBar(props) {
  const [isTrue, setIsTrue] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    // close mobile menu when a link is selected
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <div className="header">
      <h1>
        Welcome and
        <span onClick={() => setIsTrue(true)}>good {props.greeting}{props.loadingDot}</span>
      </h1>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <nav className={menuOpen ? 'open' : ''}>
        <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
        <NavLink to="/about" onClick={handleLinkClick}>About</NavLink>
        <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>
      </nav>
      <ShowClock isTrue={isTrue} isClose={() => setIsTrue(false)}>
        {props.time}
      </ShowClock>
    </div>
  );
}
export default NavBar;

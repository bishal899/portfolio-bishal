import { NavLink } from 'react-router';
import ShowClock from './ShowClock';
import { useState } from 'react';
import './NavBar.css';
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar(props) {
  const [isTrue, setIsTrue] = useState(false);
  const [isActive, setIsActive] = useState(false)

  function openMenu() {
    console.log('opened')
    setIsActive(true)
  }
  function closeMenu() {
    console.log('closed')
    setIsActive(false)
  }

  return (
    <div className="header">
      <h1>
        Welcome and
        <span onClick={() => setIsTrue(true)}>good {props.greeting}{props.loadingDot}</span>
      </h1>
      <nav className='desktop-menu'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <ShowClock isTrue={isTrue} isClose={() => setIsTrue(false)}>
        {props.time}
      </ShowClock>
      <div className="mobile-menu">
        <RxHamburgerMenu className='menu-btn' size={25} onClick={openMenu} />
        <nav className={`menu-container ${isActive && 'active'}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <button onClick={closeMenu}>close</button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

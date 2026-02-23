import { NavLink } from 'react-router';
import ShowClock from './ShowClock';
import { useState } from 'react';
import './NavBar.css';

function NavBar(props) {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div className="header">
      <h1>
        Welcome and
        <span onClick={() => setIsTrue(true)}>good {props.greeting}{props.loadingDot}</span>        
      </h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <ShowClock isTrue={isTrue} isClose={() => setIsTrue(false)}>
        {props.time}
      </ShowClock>
    </div>
  );
}
export default NavBar;

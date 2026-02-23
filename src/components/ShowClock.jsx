import { createPortal } from 'react-dom';
import './ShowClock.css';

function ShowClock({ isTrue, isClose, children }) {
  if (!isTrue) return null;
  return createPortal(
    <div onClick={isClose} className="clock-container">
      <div>{children}</div>
    </div>,
    document.body
  );
}

export default ShowClock;

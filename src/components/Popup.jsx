import { createPortal } from 'react-dom';
import './Popup.css'
import { TiTick } from "react-icons/ti";

function Popup(props) {
    if (!props.isTrue) return null

    return createPortal(
        <div className="popup-container">
            <div className="popup">
                <TiTick className='tick-icon' />
                <p>message sent</p>
                <button onClick={props.isClose}>close</button>
            </div>
        </div>,
        document.body
    )
}

export default Popup
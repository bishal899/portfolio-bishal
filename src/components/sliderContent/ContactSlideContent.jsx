import { Link } from 'react-router'
import './ContactSlideContent.css'
import './SliderContent.css'

function ContactSlideContent() {
    return (
        <div className="contact-slide-content-container">
            <img src="/get-in-touch.jpg" alt="get-in-touch" />
            <div className="content-container">
                <h2>get in touch</h2>
                <p>I'm currently open to frontend developer roles and opportunities. If you're looking for someone detail-oriented, passionate about clean design, and eager to contribute — let's talk.</p>
                <Link to='/contact' className='button'>contact me</Link>
            </div>
        </div>
    )
}

export default ContactSlideContent
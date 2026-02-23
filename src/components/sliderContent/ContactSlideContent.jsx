import { Link } from 'react-router'
import './ContactSlideContent.css'
import './SliderContent.css'

function ContactSlideContent() {
    return (
        <div className="contact-slide-content-container">
            <img src="/get-in-touch.jpg" alt="get-in-touch" />
            <div className="content-container">
                <h2>get in touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit velit, ratione et molestias inventore dolores quidem cumque laborum.</p>
                <Link to='/contact' className='button'>contact me</Link>
            </div>
        </div>
    )
}

export default ContactSlideContent
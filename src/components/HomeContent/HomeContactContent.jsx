import { Link } from 'react-router'
import './HomeContactContent.css'
import './HomeContactContent.css'

function HomeContactContent() {
    return (
        <div className="home-contact-content">
            <img src="/get-in-touch.jpg" alt="get-in-touch" />
            <div className="content-container">
                <h2>get in touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit velit, ratione et molestias inventore dolores quidem cumque laborum.</p>
                <Link to='/contact' className='button'>contact me</Link>
            </div>
        </div>
    )
}

export default HomeContactContent
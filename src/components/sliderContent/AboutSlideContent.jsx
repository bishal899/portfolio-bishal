import { Link } from 'react-router'
import './AboutSlideContent.css'
import './SliderContent.css'

function AboutSlideContent() {
    return (
        <div className="about-slide-content-container">
            <img src="/programming.jpg" alt="programming-image" />
            <div className="content-container">
                <p>Frontend Developer specializing in React with strong knowledge of HTML, CSS, JavaScript (ES6+), and modern frontend tools. Passionate about writing clean code, improving UI/UX, and developing scalable frontend applications</p>
                <Link to='/about' className='button'>know more</Link>
            </div>
        </div>
    )
}

export default AboutSlideContent
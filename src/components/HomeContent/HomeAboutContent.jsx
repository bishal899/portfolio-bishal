import { Link } from 'react-router'
import './HomeAboutContent.css'


function HomeAboutContent() {
    return (
        <div className="home-about-content">
            <img src="/programming.jpg" alt="programming-image" />
            <div className="content-container">
                <p>Frontend Developer specializing in React with strong knowledge of HTML, CSS, JavaScript (ES6+), and modern frontend tools. Passionate about writing clean code, improving UI/UX, and developing scalable frontend applications</p>
                <Link to='/about' className='button'>know more</Link>
            </div>
        </div>
    )
}

export default HomeAboutContent

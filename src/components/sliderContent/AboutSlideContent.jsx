import { Link } from 'react-router'
import './AboutSlideContent.css'
import './SliderContent.css'

function AboutSlideContent() {
    return (
        <div className="about-slide-content-container">
            <img src="/programming.jpg" alt="programming-image" />
            <div className="content-container">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam velit consequuntur fuga unde culpa facere autem laudantium architecto? Odio ab, eaque error atque, rerum, sequi laborum ex molestias excepturi omnis aspernatur commodi cupiditate nobis!</p>
                <Link to='/about' className='button'>know more</Link>
            </div>
        </div>
    )
}

export default AboutSlideContent
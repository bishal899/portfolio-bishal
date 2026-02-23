import { FaHtml5 } from 'react-icons/fa'
import { SiCsswizardry } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import SkillItem from '../components/SkillItem'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className='about-page'>
      <div className="about-content">
        <h2>about me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aperiam ratione totam atque aliquid, mollitia quas iste distinctio ipsa aut quaerat fuga repudiandae accusamus sequi corporis? Consectetur neque aperiam est eum veniam non reprehenderit delectus nam iusto enim.</p>
      </div>
      <div className="skills-content">
        <h3>my skills</h3>
        <div className="skills-container">
          <SkillItem skillName='html' bgcolor='red' value='78%'>
            <FaHtml5 size={18} />
          </SkillItem>
          <SkillItem skillName='css' bgcolor='blue' value='69%'>
            <SiCsswizardry size={18} />
          </SkillItem>
          <SkillItem skillName='js' bgcolor='yellow' value='61%'>
            <FaJs size={18} />
          </SkillItem>
          <SkillItem skillName='react' bgcolor='deepblue' value='50%'>
            <FaReact size={18} />
          </SkillItem>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
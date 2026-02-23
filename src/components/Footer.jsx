import { Link } from 'react-router';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer(props) {
  const {today, time} = props
  return (
    <div className="footer">
      <p>@ Bishal {today}</p>
      <span className='time'>{time}</span>
      <div className="social-links">
        {/* links of social media -- from react-icon*/}
        <Link>
          <FaFacebook size={28} />
        </Link>
        <Link>
          <FaLinkedin size={28} />
        </Link>
        <Link>
          <FaGithub size={28} />
        </Link>
      </div>
    </div>
  );
}
export default Footer;

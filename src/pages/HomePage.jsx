import './HomePage.css';
import { lazy } from 'react';

const FirstSlideContent = lazy(() => import('../components/sliderContent/FirstSlideContent'));
const AboutSlideContent = lazy(() => import('../components/sliderContent/AboutSlideContent'));
const ContactSlideContent = lazy(() => import('../components/sliderContent/ContactSlideContent'));

function HomePage() {
  return (
    <div className='home-page'>
      <FirstSlideContent />
      <AboutSlideContent />
      <ContactSlideContent />
    </div>
  );
}
export default HomePage;
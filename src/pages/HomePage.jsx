import './HomePage.css'
import { lazy, Suspense } from 'react';
import Fallback from '../components/Fallback'

const FirstSlideContent = lazy(() => import('../components/sliderContent/FirstSlideContent'))
const AboutSlideContent = lazy(() => import('../components/sliderContent/AboutSlideContent'))
const ContactSlideContent = lazy(() => import('../components/sliderContent/ContactSlideContent'))


function HomePage() {
  return (
    <div className='home-page'>
      <Suspense fallback={<Fallback />}>
        <FirstSlideContent />
        <AboutSlideContent />
        <ContactSlideContent />
      </Suspense>
    </div>
  )
}
export default HomePage
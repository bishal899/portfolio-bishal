import './HomePage.css'
import { lazy, Suspense } from 'react';
import Fallback from '../components/Fallback'

const FirstSlideContent = lazy(() => import('../components/HomeContent/HomeHeroContent'))
const AboutSlideContent = lazy(() => import('../components/HomeContent/HomeAboutContent'))
const ContactSlideContent = lazy(() => import('../components/HomeContent/HomeContactContent'))

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

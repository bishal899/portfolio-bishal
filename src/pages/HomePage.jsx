import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './HomePage.css';
import { lazy, Suspense } from 'react';
import Fallback from '../components/Fallback';

const FirstSlideContent = lazy(() => import('../components/sliderContent/FirstSlideContent'));
const AboutSlideContent = lazy(() => import('../components/sliderContent/AboutSlideContent'));
const ContactSlideContent = lazy(() => import('../components/sliderContent/ContactSlideContent'));

function HomePage() {
  return (
    <div className='home-page'>
      <Swiper
        modules={[Navigation]}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <Suspense fallback={<Fallback />}>
          <SwiperSlide>
            <FirstSlideContent />
          </SwiperSlide>
          <SwiperSlide>
            <AboutSlideContent />
          </SwiperSlide>
          <SwiperSlide>
            <ContactSlideContent />
          </SwiperSlide>
        </Suspense>
      </Swiper>
    </div>
  );
}
export default HomePage;
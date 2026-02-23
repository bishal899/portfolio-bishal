import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
function App() {
  const [dateTime, setDateTime] = useState(new Date());
  const [loadingDot, setLoadingDot] = useState('')
  const today = dateTime.getFullYear();
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
      
      setLoadingDot(prev => {
        if (prev.length < 3) {
          return prev+'.'
        } else {
          return ''
        }
      })
    }, 1000);

    return () => clearInterval(interval)
  }, [])
  
  const time = dateTime.toLocaleString('en-IN', {
    hour: 'numeric', // Use 'numeric' or '2-digit'
    minute: '2-digit', // Use '2-digit' for padding (e.g., 05 instead of 5)
    second: '2-digit',
    hour12: true, // Explicitly force 12-hour format
  });
  const greeting =
    dateTime.getHours() < 12 ? 'morning' :
      dateTime.getHours() < 16 ? 'afternoon' :
        dateTime.getHours() < 21 ? 'evening' : 'night'
  return (
    <>
      <NavBar greeting={greeting} time={time} loadingDot={loadingDot} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer today={today} time={time} />
    </>
  );
}

export default App;

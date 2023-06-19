import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SiteNav from './components/SiteNav';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-2QGJ5XS6JK";

function App() {
  ReactGA.initialize(TRACKING_ID);

  return (
    <Router>
      <header>
        <SiteNav />
      </header>
      <Routes className='container fluid'>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        {/* TODO: */}
        {/* <Route path='/billing' element={<BillingPage />} /> */}
      </Routes>
      <footer className='text-center'>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

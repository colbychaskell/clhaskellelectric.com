import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SiteNav from './components/SiteNav';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <header>
        <SiteNav />
      </header>
      <Routes >
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

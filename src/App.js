import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './component/common/Footer';
import Home from './component/coore/home/Home';
import About from './pages/about/aboutUs/About';
import Testimonials from './pages/Testimonials';
import Services from './pages/Services'
import Cources from './pages/cources/Cources';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact';
import Navbar from './component/common/Navbar';
import CourceApply from './pages/cources/CourceApply';
import Registration from './pages/Authentication/Registration';
import LoginPage from './pages/Authentication/LoginPage';
import LogoutPage from './pages/Authentication/LogoutPage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<About/>}/>
          <Route path='/testimonials' element={<Testimonials/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/cources' element={<Cources/>}/>
          <Route path='/apply/:courceName' element={<CourceApply/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/logout' element={<LogoutPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

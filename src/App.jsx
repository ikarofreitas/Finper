import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import LandingPage from './pages/LandingPage.jsx'


export default function App() {
  return (    

    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
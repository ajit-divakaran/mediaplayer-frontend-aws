import Footer from './components/Footer'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Watchinghistory from './pages/Watchinghistory'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'

function App() {
 

  return (
    
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/watchhistory" element={<Watchinghistory/>} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
      <Footer/>
    </>
  )
}

export default App

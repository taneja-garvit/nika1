import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { About, Blog, Documentation, Home, PrivacyPolicy, TermsOfService, Waitlist } from './pages';
import { Footer, Navbar } from './components';

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/documentation' element={<Documentation />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsOfService />} />
          <Route path='/waitlist' element={<Waitlist />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App

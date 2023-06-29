import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Signup = () => {
  return <h1>Signup page</h1>;
}

function App() {
  // ...
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App

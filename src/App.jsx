// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RequestsList from './pages/RequestsList';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header'; // Import Header

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ProtectedRoute element={Home} />} />
          <Route path="/about" element={<ProtectedRoute element={About} />} />
          <Route path="/contact" element={<ProtectedRoute element={Contact} />} />
          <Route path="/requests" element={<ProtectedRoute element={RequestsList} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

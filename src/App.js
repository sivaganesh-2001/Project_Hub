// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import ManageFaculty from './pages/ManageFaculty';
import ManageStudents from './pages/ManageStudents';
import RegisterFaculty from './pages/RegisterFaculty';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    const validEmail = 'admin@example.com';
    const validPassword = 'admin123';

    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/manage-faculty" element={isLoggedIn ? <ManageFaculty /> : <Navigate to="/" />} />
        <Route path="/manage-students" element={isLoggedIn ? <ManageStudents /> : <Navigate to="/" />} />
        <Route path="/register-faculty" element={isLoggedIn ? <RegisterFaculty /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

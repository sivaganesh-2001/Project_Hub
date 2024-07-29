// src/pages/AdminDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-dashboard">
      <Navbar />
      <div className="card-container">
        <Card title="Manage Faculty" description="Here you can add, edit, or remove faculty members." onClick={() => handleNavigate('/manage-faculty')} />
        <Card title="Manage Students" description="Here you can add, edit, or remove students." onClick={() => handleNavigate('/manage-students')} />
      </div>
    </div>
  );
};

export default AdminDashboard;

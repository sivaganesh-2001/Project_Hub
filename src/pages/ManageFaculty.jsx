// src/pages/ManageFaculty.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import '../styles/ManageFaculty.css';

const ManageFaculty = () => {
  return (
    <div className="manage-faculty">
      <Navbar />
      <div className="card-grid">
        <Card title="Add Faculty" />
        <Card title="Update Faculty"  />
        <Card title="Suspend Faculty" />
        <Card title="Remove Faculty"/>
      </div>
      <div className="view-card">
        <Card title="View Faculty" />
      </div>
    </div>
  );
};

export default ManageFaculty;

// src/pages/ManageStudents.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import '../styles/ManageStudents.css';

const ManageStudents = () => {
  return (
    <div className="manage-students">
      <Navbar />
      <div className="card-grid">
        <Card title="Add Student" description="Add new students." />
        <Card title="Update Student" description="Update existing student details." />
        <Card title="Suspend Student" description="Suspend students." />
        <Card title="Remove Student" description="Remove students." />
      </div>
      <div className="view-card">
        <Card title="View Students" description="View all students." />
      </div>
    </div>
  );
};

export default ManageStudents;

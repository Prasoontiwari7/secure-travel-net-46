import React from 'react';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
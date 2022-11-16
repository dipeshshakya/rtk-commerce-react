import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="container mx-auto w-full p-20">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;

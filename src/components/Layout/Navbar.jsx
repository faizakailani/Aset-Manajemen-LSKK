import React from 'react';
import profileImg from "../../assets/react.svg"; 

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 z-10 flex items-center bg-white p-1 border-b border-gray-300">
      <div className="w-56 flex items-center">        
        <strong className="text-secondary capitalize ml-1 flex-1">Aset Management</strong>
      </div>
      <div className="ml-auto">
        <img src={profileImg} className="w-10 h-10 rounded-full" alt="profile" />
      </div>
    </div>
  );
};

export default Navbar;

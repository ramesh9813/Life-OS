import React, { useState } from 'react';
import '../style/profile.css';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile">
      <div className="profile-image" onClick={toggleMenu}>
        <img src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="Profile" />
      </div>
      {isOpen && (
        <ul className="profile-menu">
          <li>My Profile</li>
          <li>My Report</li>
          <li>Settings</li>
          <li>Payment</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default Profile;

import React from 'react';
import '../style/footer.css';

const Footer = () => {
  return (
    
    <footer className="footer">
      <hr />
      <div className="footer-content">
        <hr />
        <p>© 2024 Your Company Name. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

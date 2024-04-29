import React from 'react';
import {Link} from 'react-router-dom'
import '../style/footer.css';

const Footer = () => {
  return (
    
    <footer className="footer">
      <hr />
      <div className="footer-content">
        <hr />
        <p>© 2024 Your Company Name. All rights reserved.</p>
        <ul className="footer-links">
          <Link></Link>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

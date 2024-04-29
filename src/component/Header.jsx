import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../auth/Profile';
import '../style/header.css'

const Header = () => {
   

  return (
   <div className="header-container">
   <nav className="navbar navbar-expand-lg navbar-primary bg-light">
    <Link to='/'><Link className="navbar-brand" to="/">Navbar</Link></Link>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
    <div className="collapse navbar-collapse ms-4 search-bar" id="navbarTogglerDemo02">
    <Link to='/pricing'>Pricing</Link>
      <form className="form-inline my-4 my-lg-0 d-flex ">
        <input className="form-control mr-sm-2 input" type="search" placeholder="Search"/>
        <button className="btn btn-outline-primary my-2 my-sm-0 ms-2" type="submit">Search</button>
      </form>
    </div>
    <div className='d-flex me-3'>
      <div className="login">
      {/* <Link to="/login" className='btn btn-outline-primary my-2 my-sm-0 me-3 login-btn'>
          Login
      </Link> */}
      </div>
      <Profile/>
    </div>
    </nav>
   </div>
  );
};

export default Header;

import React from 'react';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <form class="form-inline my-4 my-lg-0 d-flex ">
          <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <button className='btn btn-outline-primary'>login</button>
      </div>
    </nav>
  );
};

export default Header;

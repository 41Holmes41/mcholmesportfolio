import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <div>0101000 010101 010100 010 10</div>
          <Link className="name" to="/">101 C0lemanH01mes 1001</Link>
          <Link className="title-link" to="/about">10100101 ab0ut 1010001</Link>
          <Link className="title-link" to="/portfolio">10 p0rtf0li0 1010101</Link>
          <div className="title-link">1010011 c0ntact 10101</div>
        </div>
      </div>
    )
  }
}

export default Navbar;
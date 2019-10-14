import React from 'react';
import './Navbar.css';
import '../../pages/Page.css'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <div>0101000 010101 010100 010 10</div>
          <Link className="name flex" to="/">101 110 10101<div id="colored-link"> C0lemanH01mes </div>1001 11000 001</Link>
          <Link className="title-link flex" to="/about">10100101 100101 <div id="colored-link"> ab0ut </div>1010001 10101 01001</Link>
          <Link className="title-link flex" to="/portfolio">101 11010<div id="colored-link"> p0rtf0li0 </div> 1010101</Link>
          <div className="title-link flex">1010011 1001010 1011000 001 <div id="colored-link"> c0ntact </div> 10101</div>
        </div>
      </div>
    )
  }
}

export default Navbar;
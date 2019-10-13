import React from 'react';
import { Link } from 'react-router-dom'
import "../Page.css"

class Portfolio extends React.Component {

  render() {
    return (
      <div className="about-container">
        <div className="about-title">101001 p0rtfo1i0 11010</div>
        <Link className="section-item" to="/taskmaster">101 TaskMaster 101001</Link>
        <Link className="section-item" to="/pirate">10100100100 01010 Pirate's Booty 1010011</Link>
        <Link className="section-item" to="/anyagram">1101010 10010 Anyagram 101010 1010 010</Link>

      </div>
    )
  }
}

export default Portfolio;
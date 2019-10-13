import React from 'react';
import { Link } from 'react-router-dom';
import '../Page.css'

class PiratePage extends React.Component {
  render() {
    return (
      <div className="about-container">
      <div className="about-title">pirate</div>
      <Link className="section-item" to="/portfolio">Back</Link>
    </div>
    )
  }
}

export default PiratePage
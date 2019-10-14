import React from 'react';
import { Link } from 'react-router-dom'
import "../Page.css"

class Portfolio extends React.Component {

  render() {
    return (
      <div className="about-container">
        <div  className="about-title">p0rtfo1i0</div>
        <Link className="flex section-item" to="/javascript">1001 0 010101<div id="colored-link">javascr1pt, html and css</div>10100 010</Link>
        <Link className="flex section-item" to="/express">11010 0101 01<div id="colored-link">express and node.js</div>00 010100</Link>
        <Link className="flex section-item" to="/react">101001 1001 0<div id="colored-link">react</div>001010 01 01</Link>
        <Link className="flex section-item" to="/mongo">000 101001<div id="colored-link">m0ng0db, at1as and m0ng00se</div>001010 0101</Link>
        <Link className="flex section-item" to="/django">1010 000 1010<div id="colored-link">djang0 and pyth0n</div>0010101 010</Link>
        <Link className="flex section-item" to="/psql">101<div id="colored-link">P0stgreSQL</div>101010010 100</Link>

      </div>
    )
  }
}

export default Portfolio;
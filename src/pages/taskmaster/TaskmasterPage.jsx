import React from 'react';
import {Link} from 'react-router-dom';
import '../Page.css'

class TaskmasterPage extends React.Component{
  render() {
    return(
      <div className="about-container">
        <div className="about-title">taskmaster</div>
        <div className="section-item">The taskmaster series was my first venture into full stack application creation.  the first iteration was the taskmaster4000, succeded by the taskmaster5000 and eventually completed with the taskmaster6000.</div>
        <div>10010 1010011 0101101011011  </div>
        <div className="section-item">about: taskmaster attempts to alleviate tension between bosses and employees, teachers and students, or parents and children by giving subordinates the power to choose their assignments and incentivize their completion.</div>
        <div>110101010 01010 1010 0001101 </div>
        <a className="section-item" target="blank" href="https:taskmaster4000.herokuapp.com">
        <div className="section-title">taskmaster4000</div>
        <div className="section-item">built with javascript, express, node.js and materialize. hosted with mongodb and heroku</div>
        <div className="section-item">click here to visit taskmaster4000</div>
        </a>
        <div>11000 1111010101 0010101 </div>
        <a className="section-item" target="blank" href="https:taskmaster5000.herokuapp.com">
        <div className="section-title">taskmaster5000</div>
        <div className="section-item">same build but with advanced database models and adds groups and messages features</div>
        <div className="section-item">click here to visit taskmaster5000</div>
        </a>
        <div>1010010 010010 110 </div>
        <a className="section-item" target="blank" href="https:taskmaster6000.herokuapp.com">
        <div className="section-title">taskmaster6000</div>
        <div className="section-item">upgraded to react, express, node.js and bootstrap</div>
        <div className="section-item">click here to visit taskmaster6000</div>
        </a>
        <div>010101010 1010 01010101000 </div>
        <Link className="section-title" to="/portfolio">Back</Link>
      </div>
    )
  }
}

export default TaskmasterPage;
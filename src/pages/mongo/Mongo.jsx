import React from 'react';
import { Link } from 'react-router-dom';
import '../Page.css'

class PiratePage extends React.Component {
  render() {
    return (
      <div className="about-container">
      <div className="about-title">mongodb, atlas and mongoose</div>
      <div className="section-title">MongDB and Mongoose have become my go-to for all of my database hosting needs.  For my TaskMaster series, MongoDB Atlas provided my database hosting and Mongoose allowed me reliable and stable backend communications.  I appreciated the flexibility of the NoSQL, document-based format of Mongo because of its flexibility and adaptability.</div>
      <a  id="colored-link" className="about-title" target="_blank" href="https://taskmaster5000.herokuapp.com/">Visit TaskMaster5000 here!</a>
      <img className="mongo-title" src="https://i.imgur.com/oWcJFVN.png"/>
      <div className="section-item">TaskMaster5000 incoraporated MongoDB Atlas and Mongoose and stores all users, messages, tasks and groups on the Mongo database servers.  The following are the MongoDB models for uers, messages, groups and tasks used in TaskMaster5000.</div>
      <div className="flex">
        <img className="schema1" src="https://i.imgur.com/QPG6h8H.png" />
        <img className="schema2" src="https://i.imgur.com/AJXQDtg.png" />
        <img className="schema3" src="https://i.imgur.com/DEBGBm7.png" />
        <img className="schema4" src="https://i.imgur.com/oZBUJDs.png" />
      </div>
      <div className="section-item">incorporated into the accessing and manipulating of data in the Atlas database, are the Mongoose commands in the controllers.  The following is an example of the showDashboard() route where callback functions were used to run multiple asynchronous functions.  However, if I were to refactor this code today, I would most defintely use async/await functions with try/catch blocks.</div>
      <img className="mongo-showdashboard" src="https://i.imgur.com/PRoO9aY.png" />



      <Link id="colored-link"> className="section-title" to="/portfolio">Back</Link>
    </div>
    )
  }
}

export default PiratePage
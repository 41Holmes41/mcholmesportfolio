import React from 'react';
import {Link} from 'react-router-dom';
import '../Page.css'

class ExpressPage extends React.Component{
  render() {
    return(
      <div className="about-container">
      <div className="about-title">express and node.js</div>
      <div className="section-title">My experience working with Express and Node.js showed me that, because of the true control and customization express offers, I slightly prefer it to the Django framework. The TaskMaster seriesuses Express and Node.js for its server creation.</div>
      <a  id="colored-link" className="about-title" target="_blank" href="https://taskmaster5000.herokuapp.com/">Visit TaskMaster5000 here!</a>
      <img className="mongo-title" src="https://i.imgur.com/oWcJFVN.png"/>
      <div className="section-item">TaskMaster5000 takes advantage of Google's Passport authorization platform in order to sign up new users and login.  All of the necessary routes are also protected with Passport:</div>
      <img className="express-passport" src="https://i.imgur.com/H94fQ99.png"/>
      <div className="section-item">Using express router technology, the entire taskmaster series has routes that lead to controllers.  The following are examples of the routes for the group functions.</div>
      <img className="express-controllers" src="https://i.imgur.com/CElSqsM.png"/>
      <div className="section-item">the routes lead to the controllers where the database functionality occurs:</div>
      <img className="express-passport" src="https://i.imgur.com/HdK3Ws2.png"/>



        <Link id="colored-link" className="section-title" to="/portfolio">Back</Link>
      </div>
    )
  }
}

export default ExpressPage;
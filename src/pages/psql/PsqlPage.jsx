import React from 'react';
import {Link} from 'react-router-dom';
import '../Page.css'

class PsqlPage extends React.Component{
  render() {
    return(
      <div className="about-container">
        <div className="about-title">PostgreSQL</div>
        <div className="section-title">The CourtKings app stores its information with PostgreSQL technology.  PostgrSQL allowed for quick and efficient set-up and powerful referencing tools for accessing documents from other documents with foreign keys.  This made manipulating data within our app a manageable process.</div>
        <a  id="colored-link" className="about-title" target="_blank" href="https://courtkings.herokuapp.com/">Play C0urt K1ngs here!</a>
        <div className="section-item">The following models were used in CourtKings to store all the data in the app.  </div>
        <div className="flex">
          <img className="psql-model1" src="https://i.imgur.com/zOFWXZy.png"/>
          <img className="psql-model2" src="https://i.imgur.com/aynorW3.png"/>
        </div>
        <div className="flex">
          <img className="psql-model3" src="https://i.imgur.com/6iRNTKf.png"/>
          <img className="psql-model4" src="https://i.imgur.com/xWaQRHC.png"/>
        </div>
        <div className="section-item">In order to manipulate the information in the database, many views needed to be written to handle the operations.  Shown below are the create team view and show team views. </div>
        <img className="psql-views" src="https://i.imgur.com/AkUz0LX.png"/>


        <Link id="colored-link" className="section-title" to="/portfolio">Back</Link>
      </div>
    )
  }
}

export default PsqlPage;
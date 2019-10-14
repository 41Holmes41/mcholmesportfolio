import React from 'react';
import { Link } from 'react-router-dom';
import '../Page.css'

class AnyagramPage extends React.Component {
  render() {
    return (
      <div className="about-container">
      <div className="about-title">Django and Python</div>
      <div className="about-title">After rearching and delving into the Django platform, i found it to be rather impressive and intuitive to use.  Python is an elegant object-oriented coding language that was easy to learn and highly functional with minimal lines of code needed to be written.  I made the following app as part of a team of three people.  I played a crucial role in all aspects its creation including the front-end, back-end and github management.  CourtKings is a fun fantasy basketball team simulator that you can play now!</div>
      <a  id="colored-link" className="about-title" target="_blank" href="https://courtkings.herokuapp.com/">Play C0urt K1ngs here!</a>
      <img className="django-title" src="https://i.imgur.com/vdMGrMF.png"/>
      <div className="about-section">after initializing the project, the first step was to create the authentication view so that new users could sign up and use the app.  The simplicity of Django's inherent user mmodel expediated this process.</div>
      <img className="django-signup" src="https://i.imgur.com/wiQPu0K.png"/>
      <div className="about-section">Routing in Django was simpler than express.  Although I regretted not having more control of the finer details, overall, using Django's URL patterns and paths was a quicker and more efficient process than using Express</div>
      <img className="django-paths" src="https://i.imgur.com/se9h1rh.png"/>
      <div className="about-section">The logic for our game required a simulate day function for the league manager to press whenever stats needed to be generated.  Python provides a way to generate random numbers which were modified based on what kind of statistic was being generated and how high the particular player's ratings were.</div>
      <img className="django-simulate" src="https://i.imgur.com/75E4B4C.png"/>



      <Link className="section-title" to="/portfolio">Back</Link>
    </div>
    )
  }
}

export default AnyagramPage
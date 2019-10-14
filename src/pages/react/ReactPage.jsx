import React from 'react';
import {Link} from 'react-router-dom';
import '../Page.css'

class ReactPage extends React.Component{
  render() {
    return(
      <div className="about-container">
      <div className="about-title">react</div>
      <div className="section-title">Learning and working in React was truly the most exciting adventure of my life.  I spent many hours studying the advantages of efficient state management and component reusability.  Any-a-gram and TaskMaster6000 were both made in React.  I want to highlight parts of each in order to display my React abilities</div>
      <div className="flex">
        <div>
          <a  id="colored-link" className="about-title react-title" target="_blank" href="https://taskmaster6000.herokuapp.com/">TaskMaster6000</a>
          <img className="react-tm" src="https://i.imgur.com/ek54sGV.png"/>
        </div>
        <div>
          <a  id="colored-link" className="about-title react-title" target="_blank" href="https://anyagram.herokuapp.com/">Any-A-Gram</a>
          <img className="react-ag" src="https://i.imgur.com/ShFU3JO.png"/>
        </div>
      </div>
      <div className="section-item">From TaskMaster6000 I want to highlight the use of React-Router-Dom to navigate the client-side routes: </div>
      <img className="react-routes" src="https://i.imgur.com/ibvYhGL.png"/>
      <div className="section-item">The next picture highlights my advancement into state management.  I enjoyed finding ways to maximize the efficiency of the app by pushing required state as far down the component chain as possible.  The following is a fully controlled form within the Any-a-gram app and all required state is found within the form itself</div>
      <img className="express-controllers" src="https://i.imgur.com/E9eeWPU.png"/>
      <div className="section-item">Component reusability became a passion of mine.  Finding ways to make componenets completely reusable through the passing of props so that they can be used repeatedly throughout the entire app with complete customization and flexibility.</div>


        <Link id="colored-link" className="section-title" to="/portfolio">Back</Link>
      </div>
    )
  }
}

export default ReactPage;
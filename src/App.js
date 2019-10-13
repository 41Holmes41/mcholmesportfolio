import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AboutPage from './pages/about/AboutPage';
import PortfolioPage from './pages/portfolio/PortfolioPage'
import TaskmasterPage from './pages/taskmaster/TaskmasterPage';
import PiratePage from './pages/pirate/PiratePage'
import AnyagramPage from './pages/anyagram/AnyagramPage'
import Footer from './components/Footer'


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/about" render={()=><AboutPage />}/>
        <Route exact path="/portfolio" render={()=><PortfolioPage />}/>
        <Route exact path="/taskmaster" render={()=><TaskmasterPage />}/>
        <Route exact path="/pirate" render={()=><PiratePage />}/>
        <Route exact path="/anyagram" render={()=><AnyagramPage />}/>
      </Switch>
    </div>
  );
  }
}

export default App;

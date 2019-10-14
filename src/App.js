import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AboutPage from './pages/about/AboutPage';
import PortfolioPage from './pages/portfolio/PortfolioPage'
import JavascriptPage from './pages/javascript/JavascriptPage';
import MongoPage from './pages/mongo/Mongo'
import DjangoPage from './pages/django/Django'
import PsqlPage from './pages/psql/PsqlPage'
import ExpressPage from './pages/express/ExpressPage'
import ReactPage from './pages/react/ReactPage'
import HomePage from './pages/HomePage/HomePage'

import Footer from './components/Footer'


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/about" render={()=><AboutPage />}/>
        <Route exact path="/" render={()=><HomePage />}/>
        <Route exact path="/portfolio" render={()=><PortfolioPage />}/>
        <Route exact path="/Javascript" render={()=><JavascriptPage />}/>
        <Route exact path="/mongo" render={()=><MongoPage />}/>
        <Route exact path="/django" render={()=><DjangoPage />}/>
        <Route exact path="/psql" render={()=><PsqlPage />}/>
        <Route exact path="/express" render={()=><ExpressPage />}/>
        <Route exact path="/react" render={()=><ReactPage />}/>
      </Switch>
    </div>
  );
  }
}

export default App;

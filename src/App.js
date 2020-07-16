import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Madrasha from './pages/Madrasha/Madrasha';
import NotFound from './pages/NotFound/NotFound';
import PBS from './pages/PBS/PBS';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import DetailsItem from './components/DetailsItem/DetailsItem';

function App() {
  return (
    <Router >
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/madrasha" component={Madrasha} />
        <Route path="/pbs" component={PBS} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/friend/:userId" component={DetailsItem}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;

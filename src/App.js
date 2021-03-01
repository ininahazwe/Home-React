import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from "./pages";
import About from "./pages/about";
import Mentions from "./pages/mentions";
import EditionPost from "./components/EditionsSection/Edition";
import ScrollToTop from "./components/ScroolToTop";
import ProjectPost from "./components/Projects/Project";
import Donation from "./pages/donation";

function App() {

    const PageNotFound = () => (
        <div>404 !<Link to="/">Home</Link></div>
    )
  return (
    <Router>
        <ScrollToTop />
           <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/about" component={About} />
               <Route exact path="/mentions" component={Mentions} />
               <Route exact path="/project/:slug" component={ProjectPost} />
               <Route exact path="/edition/:slug" component={EditionPost} />
               <Route exact path="/donation" component={Donation} />
               <Route component={PageNotFound} />
           </Switch>
    </Router>
  );
}

export default App;

import React from 'react'
import Main from './Main';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css'
import shortboards from './shortboards.jsx';
import "./App.css"
import NotFound from "./NotFound.js"
import About from "./About"
import longboards from "./longboards"
import Customs from "./Customs"
import BoardPage from './BoardPage';
import Fish from './Fish'
import Groveler from './Groveler'
import HighPerformance from './HighPerformance'
import CatfishPage from './CatfishPage'
import NoseRiderPage from "./NoseRiderPage"
import HPLPage from "./HPLPage"
import contact from "./contact"

function App() {
    return (
            
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/shortboards" component={shortboards} />
                <Route exact path="/longboards" component={longboards} />
                <Route exact path="/404" component={NotFound}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/customs" component={Customs}/>
                <Route exact path="/contact" component={contact}/>
                <Route exact path="/fish" component={Fish}/>
                <Route exact path="/groveler" component={Groveler}/>
                <Route exact path="/high-performance" component={HighPerformance}/>
                <Route exact path="/catfish" component={CatfishPage}/>
                <Route exact path="/noserider" component={NoseRiderPage}/>
                <Route exact path="/highperformancelongboard" component={HPLPage}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
            
        
    )
}


export default App
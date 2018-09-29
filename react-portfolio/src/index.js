import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
import {BrowserRouter,Route} from 'react-router-dom';
import Tspace from './projectdetail/tspace';
import ChinaPJ from './projectdetail/countrypj';
import Weather from './projectdetail/weather';


ReactDOM.render(
<BrowserRouter>
    <div>
    <Route  exact path="/" component={App}/>
    <Route onUpdate={() => window.scrollTo(0, 0)} path="/tspace" component={Tspace}/>
    <Route onUpdate={() => window.scrollTo(0, 0)} path="/countrypj" component={ChinaPJ}/>
    <Route onUpdate={() => window.scrollTo(0, 0)} path="/Weather" component={Weather}/>
    </div>
</BrowserRouter>
, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
import {BrowserRouter,Route} from 'react-router-dom';
import Tspace from './projectdetail/tspace';
import ChinaPJ from './projectdetail/countrypj';
import Weather from './projectdetail/weather';
import MyPortfolio from './projectdetail/portfolio';

ReactDOM.render(
<BrowserRouter>
    <div>
    <Route  exact path="/" component={App}/>
    <Route  path="/tspace" component={Tspace}/>
    <Route  path="/countrypj" component={ChinaPJ}/>
    <Route  path="/Weather" component={Weather}/>
    <Route  path="/myportfolio" component={MyPortfolio}/>
    </div>
</BrowserRouter>
, document.getElementById('root'));


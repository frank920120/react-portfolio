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
    <Route  path="/tspacedetail" component={Tspace}/>
    <Route  path="/countrydetail" component={ChinaPJ}/>
    <Route  path="/weatherdetail" component={Weather}/>
    <Route  path="/myportfoliodetail" component={MyPortfolio}/>
    </div>
</BrowserRouter>
, document.getElementById('root'));


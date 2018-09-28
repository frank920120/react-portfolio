import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
import {BrowserRouter,Route} from 'react-router-dom';
import Tspace from './projectdetail/tspace'
import ChinaPJ from './projectdetail/countrypj'


ReactDOM.render(
<BrowserRouter>
    <div>
    <Route exact path="/" component={App}/>
    <Route path="/tspace" component={Tspace}/>
    <Route path="/countrypj" component={ChinaPJ}/>
    </div>
</BrowserRouter>
, document.getElementById('root'));


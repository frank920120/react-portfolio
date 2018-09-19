import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
import {BrowserRouter,Route} from 'react-router-dom';
import Tspace from './projectdetail/tspace'



ReactDOM.render(
<BrowserRouter>
    <div>
    <Route exact path="/" component={App}/>
    <Route path="/tspace" component={Tspace}/>
    </div>
</BrowserRouter>
, document.getElementById('root'));


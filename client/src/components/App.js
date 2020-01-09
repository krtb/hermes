import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
 
const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact={true} path="/" component={Landing} />

                <Route exact path="/surveys" component={Dashboard} />

                <Route path="/surveys/new" component={SurveyNew} />
            </BrowserRouter>
        </div>
    );
}

export default App;
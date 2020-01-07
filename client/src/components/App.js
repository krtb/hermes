import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>
 
const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Route exact={true} path="/" component={Landing} />

                <Route exact path="/surveys" component={Dashboard} />

                <Route path="/surveys/new" component={SurveyNew} />
            </BrowserRouter>
        </div>
    );
}

export default App;
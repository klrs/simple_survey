import React from 'react';
import Survey from './survey';
import NavBar from './navbar';
import Results from './results';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './app.css';

function App() {
    return (
        <Router>
        <div className='app'>
            <NavBar/>
            <Route path='/' exact component={Survey}/>
            <Route path='/results/:id' component={Results}/>
        </div>
        </Router>
    );
}

export default App;
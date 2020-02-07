import React from 'react';
import ExerciseForm from './components/ExerciseForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
   
      <Router>
         <div>
            <Header />
            <Switch>
               <Route path='/' component={ExerciseForm}/> 
            </Switch>
         </div>
      </Router>
  )  
  
  
}

export default App;

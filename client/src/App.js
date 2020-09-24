import React from 'react';
import './App.css';
import StudentsList from './components/StudentsList';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateStudent from './components/CreateStudent';
import StudentDetails from './components/StudentDetails';
function App() {

  return (
    <Router>
      <div>
        <HeaderComponent/>
        <div className="container" style={{marginBottom:"60px"}}>
          <Switch>
            <Route exact path="/" component={StudentsList}></Route>
            <Route path="/students" component={StudentsList}></Route>
            <Route path="/add-student/:id" component={CreateStudent}></Route>
            <Route path="/student-details/:id" component={StudentDetails}></Route>

          </Switch>
        </div>
        <FooterComponent/>
       </div>
    </Router>
  );
}

export default App;

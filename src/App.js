import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashbord from "./component/layout/Dashbord";
// import Chart from "./component/layout/Chart";
import Feed from "./component/Review/feed";
import Feed2 from "./component/Review/feed2";
import Feed3 from "./component/Review/feed3";
import Login from "./component/Login/Login";
import TeacherLogin from "./component/Login/TeacherLogin";
import Admin from "./component/Login/Admin";
import Welcome from "./component/Welcome/Welcome";
import TeacherNavbar from "./component/layout/TeacherNavbar";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Welcome} /> 
            <Route path="/Login" component={Login} />       
            <Route path="/TeacherLogin" component={TeacherLogin} /> 
            <Route path="/Admin" component={Admin} />   
            <Route path="/Dashbord" component={Dashbord} />
            {/* <Route path="/Chart" component={Chart} /> */}
            <Route path="/TeacherNavbar" component={TeacherNavbar} />
            <Route path="/feed" exact component={Feed} />
            <Route path="/feed/:id/:semester"  component={Feed} />
            <Route path="/feed2" component={Feed2} />
            <Route path="/feed3" component={Feed3} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

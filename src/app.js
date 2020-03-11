import React, { Component } from "react";
import Login from "./components/Login";
import Attendence from "./components/Attendence";
import CheckIn from './allCards/CheckInCard'
// import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/css/bootstrap.min.css";
import './css/App.css'
import { Switch, Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/Attendence" component={Attendence}></Route>
            <Route path="/CheckIn" component={CheckIn}></Route>
            {/* <SubmitValidationForm onSubmit={showResults} /> */}
      {/* <Values form="submitValidation" /> */}

          </Switch>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import UserName from "./pages/Auth/UserName";
import Confirmation from "./pages/Auth/Confirmation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

var userDetailContext = React.createContext();

var userName = "hello";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/Username">
            <UserName />
          </Route>
          <userDetailContext.Provider value={userName}>
            <Route path="/Confirmation">
              <Confirmation />
            </Route>
          </userDetailContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
export { userDetailContext };

import React from "react";
import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import UserName from "./pages/Auth/UserName";
import Confirmation from "./pages/Auth/Confirmation";
import Verification from "./pages/Auth/Verify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

var userDetailContext = React.createContext();

var userName = "hello";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Username" component={UserName} />
          <Route path="/verify/token=:tok" component={Verification} />
          <userDetailContext.Provider value={userName}>
            <Route path="/Confirmation" component={Confirmation} />
          </userDetailContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
export { userDetailContext };

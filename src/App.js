import './App.css';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Verification from './pages/Auth/Verify';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route exact path="/SignUp"><SignUp/></Route>
          <Route exact path="/verify/token=:tok"><Verification/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

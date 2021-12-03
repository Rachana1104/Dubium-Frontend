import './App.css';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
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
          <Route path="/SignUp"><SignUp/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

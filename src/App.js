import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home'
import SingleMovie from './SingleMovie';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path="/movie/:movieId" component={SingleMovie}></Route>
      </Switch>
    </Router>
  );
}

export default App;

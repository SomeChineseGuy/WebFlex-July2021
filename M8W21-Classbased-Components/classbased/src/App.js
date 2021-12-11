import logo from './logo.svg';
import './App.css';
import ClassBased from './components/Classbased';
import LifeCycle from './components/LifeCycle';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>Welcome to my Class class classes</h2>
      {/* <ClassBased someProps="Can you read this?" /> */}
      {/* <LifeCycle /> */}
      <Router>
        <nav>
          <Link to="/lifecycle"> LifeCycle </Link>
          <Link to="/classbased"> Class Based </Link>

        </nav>
        <Switch>
          <Route path="/lifecycle" component={LifeCycle} />
          <Route path="/classbased" component={ClassBased} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;

// packages
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// pages
import Home from './pages/home'
import BadRequest from './pages/bad-request'
// styling
import './App.scss';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <BadRequest />
    </Switch>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routing />
      </div>
    </Router>
  );
}

export default App;

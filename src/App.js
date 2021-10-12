import './App.css';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/" exact  component={Home}/>
          <Route path="/contact"   component={ContactUs}/>
          <Route component={NotFound}/>
       
        </Switch>
       
        </Router>
     
    </div>
  );
}

export default App;

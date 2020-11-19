import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'

// ! Components
import Admin from './components/Admin'
import AddClassForm from './components/AddClassForm';


function App() {
  return (
    <div className="App">
        <nav>
          <h1>School In The Cloud</h1>
          <button>Logout</button>
        </nav>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/add-class" component={AddClassForm}/>
      
    </div>
  );
}

export default App;
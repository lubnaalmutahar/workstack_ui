import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/home.js';
import Features from './screens/features.js';
import Contact from './screens/contact.js';
import Signup from './screens/signup.js';
import Login from './screens/login.js';
import EditAccount from './screens/editAccount.js';

function App() {
  return (
   <div className="App">
      <Home />
      <Features />
      <Contact /> 
      <Signup />
      <Login />
      <EditAccount />
    </div>      
  );
}

export default App;
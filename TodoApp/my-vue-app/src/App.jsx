import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import AppBar from './components/AppBar';
import Signin from './components/Signin';

function App() {
 
  return (
    <div style={{backgroundColor:"#eeeeee",width:"100vw", height:"100vh"}}>
      <AppBar/> 
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>     
      </div>
        );
}

export default App;

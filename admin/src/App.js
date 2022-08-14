import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './page/auth/Login';
import Home from './page/Home/Home';
import Register from './page/auth/Register'


function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/*" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
  </Routes>
   
   
   </div>
   </BrowserRouter>
   
  );
}

export default App;

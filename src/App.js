import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element= {<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/" element={<Navigate to="/SignUp" />}
    />
        {/* <Redirect from="/" to="/SignUp" /> */}
      </Routes>
    </div>
  );
}

export default App;

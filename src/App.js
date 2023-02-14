import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Offer from "./pages/Offer";




function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
          <Route path="/offer" element={<Offer/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

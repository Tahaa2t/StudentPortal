import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import LoginForm from "./Components/loginform";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";

// color pallet
// #3aa6b9
// #D0E8E1
// #348472


function App() {

  

  return (
    <div className="App">
      
      {/* <LoginForm /> */}
      <HomePage />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" Component={<LoginForm />} />
          <Route path="/home" Component={<HomePage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

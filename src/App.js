import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Home, Register, Dashboard } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

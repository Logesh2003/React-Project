import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/login"
import Page1 from "./components/Dashboard"
function App() {
  return (
    <div className="App">
      <Page1 />
    </div>
  );
}

export default App;

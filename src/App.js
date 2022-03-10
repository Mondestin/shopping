import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shopping from "./components/Shopping";
import NewItem from "./pages/newitem";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App" style={{}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/shoppings" element={<Shopping />} />
          <Route path="/items" element={<NewItem />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

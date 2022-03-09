import './App.css';
import * as React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App"
      style={{
      }}>
      <Router>
        <Navbar />
      </Router>

    </div >

  );
}
export default App;


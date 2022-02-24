import './App.css';
import * as React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewItem from './pages/newlist';

function App() {
  return (
    <div className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
      }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/create" element={<NewItem />} />
        </Routes>
      </Router>

    </div >

  );
}
export default App;


import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shopping from "./components/Shopping";
import NewItem from "./pages/newitem";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import UpdateShoppingForm from "./components/Shopping/Form/UpdateShoppingForm";
import NewShoppingForm from "./components/Shopping/Form/NewShoppingForm";

function App() {
  return (
    <div className="App" style={{}}>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/shoppings" element={<Shopping />}>
              <Route path="new" element={<NewShoppingForm />} />
              <Route path=":id/edit" element={<UpdateShoppingForm />} />
            </Route>
            <Route path="/items" element={<NewItem />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}
export default App;

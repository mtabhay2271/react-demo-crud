import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Add from "./components/create";
import Edit from "./components/edit";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/create" element={<Add />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

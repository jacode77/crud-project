import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Routes>
            <Route exact path="/create" Component={Create} />
            <Route exact path="/read" Component={Read} />
            <Route exact path="/update" Component={Update} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

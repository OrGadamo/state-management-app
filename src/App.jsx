import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./Router";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"home"}>
          <button>HOME</button>
        </Link>
        <Link to={"/"}>
          <button>counter</button>
        </Link>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

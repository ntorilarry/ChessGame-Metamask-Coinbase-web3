import logo from "./logo.svg";
import "./App.css";
import Routing from "./lib/core/routing/routing";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routing />
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footers from "./Components/Footer/Footer";
import Headers from "./Components/Header/Header";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Router />
      {/* <LocationPicker /> */}
      <Footers />
    </BrowserRouter>
  );
}

export default App;

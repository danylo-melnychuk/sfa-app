import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Matches } from "./components/Matches/Matches";
import { Navigation } from "./components/Navigation/Navigation";
import { Teams } from "./components/Teams/Teams";

function App() {
  return (
    <>
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Navigation>
    </>
  );
}

export default App;

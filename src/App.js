import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//components
import MyNavbar from "./components/MyNavbar";

//pages
import Home from "./Pages/Home";


function firestore() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default firestore;

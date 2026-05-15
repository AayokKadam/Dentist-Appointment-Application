import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import Services from "./components/services";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="App/" element={<Appointment/>}/>
        <Route path="Ser/" element={<Services/>}/>
        <Route path="Con/" element={<Contact/>}/>
        <Route path="Abo/" element={<About/>}/>
        

      </Routes>
    </Router>
  );
}

export default App;
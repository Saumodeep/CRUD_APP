// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/layout/Navbar";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import PageNot from "./PageNot";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adduser from "./component/layout/users/Adduser";
import data from "./data/user.json";
import { useState } from "react";

function App() {
  const [allData,setAllData] = useState(data);
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar allData={allData} setAllData={setAllData}/>
        <Routes>
          <Route path="/" element={<Home allData={allData} setAllData={setAllData}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/user/add" element={<Adduser />} /> */}
          <Route path="*" element={<PageNot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

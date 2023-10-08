import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/about" element={<About />}/>
          </Route>
        </Routes> 
      </Router>
    </UserContextProvider>
  );
}

export default App;



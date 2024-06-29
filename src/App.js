import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Home from "./pages/Home";
import Header1 from "./components/Header1";
import Page404 from "./pages/Page404";
import ContextProvider from "./context/Context";
import Form1 from "./pages/Form1";
import MapPage from "./pages/MapPage";
import Jerusalem from "./pages/Jerusalem";
import Graph1 from "./pages/Graph1";


function App() {



  return (
    <ContextProvider>
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path="/" element={<Home />} />
    
          <Route path="/form1" element={<Form1 />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/jerusaelm" element={<Jerusalem />} />
          <Route path="/graph1" element={<Graph1 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        {/* Footer */}
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;

import React from 'react';
import "./App.css";
import MenuPage from "./pages/MenuPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<MenuPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
  )
};

export default App;

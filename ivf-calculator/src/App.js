// src/App.js
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import InputScreen from "./components/InputScreen";
import ResultScreen from "./components/ResultScreen";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" element={<InputScreen />} />
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;

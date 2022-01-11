import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Actors from "./components/Actors";
//Styles
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/actor/:actorId" element={<Actors />} />
      </Routes>
      <hr></hr>
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;

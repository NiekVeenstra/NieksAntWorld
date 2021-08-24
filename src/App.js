import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// pages
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import Gallerypage from "./pages/Gallerypage";
import Contactpage from "./pages/Contactpage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/blog" component={Blogpage} />
          <Route exact path="/gallery" component={Gallerypage} />
          <Route exact path="/contact" component={Contactpage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

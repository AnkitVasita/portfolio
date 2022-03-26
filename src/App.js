// import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";
import Amazon from "./pages/Amazon/Amazon";
import Chat from "./pages/Chat/Chat";
import Movie from "./pages/Movie/Movie";
import Covid from "./pages/Covid/Covid";

function App() {
  // const { theme } = useContext(ThemeContext);

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/amazon" exact component={Amazon} />
          <Route path="/covid" exact component={Covid} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/movie" exact component={Movie} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      {/* <BackToTop /> */}
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Main } from "./pages";
import "./App.css";
import Amazon from "./pages/Amazon/Amazon";
import Chat from "./pages/Chat/Chat";
import Movie from "./pages/Movie/Movie";
import Covid from "./pages/Covid/Covid";
import ScrollToTop from "./utils/ScrollToTop";
import EpicReact from "./pages/Blogs/EpicReact";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Main} />
          <Route path="/z-shop" exact component={Amazon} />
          <Route path="/covid" exact component={Covid} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/movie" exact component={Movie} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/blog/epicreact" exact component={EpicReact} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
